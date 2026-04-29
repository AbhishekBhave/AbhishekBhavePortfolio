import { NextRequest, NextResponse } from 'next/server';

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
  captchaToken?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const sanitize = (value: string) => value.replace(/\s+/g, ' ').trim();

const parseContactData = (input: ContactData) => ({
  name: sanitize(input.name || ''),
  email: sanitize((input.email || '').toLowerCase()),
  subject: sanitize(input.subject || ''),
  message: (input.message || '').trim(),
  captchaToken: sanitize(input.captchaToken || ''),
});

export async function POST(request: NextRequest) {
  try {
    const rawBody: ContactData = await request.json();
    const body = parseContactData(rawBody);
    
    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (body.name.length > 80 || body.subject.length > 120 || body.message.length > 5000) {
      return NextResponse.json(
        { error: 'One or more fields exceed the allowed length.' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!EMAIL_REGEX.test(body.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Validate message length
    if (body.message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long.' },
        { status: 400 }
      );
    }

    const captchaSecret = process.env.HCAPTCHA_SECRET_KEY;
    const shouldVerifyCaptcha = process.env.NODE_ENV === 'production' && Boolean(captchaSecret);

    if (shouldVerifyCaptcha && !body.captchaToken) {
      return NextResponse.json(
        { error: 'Captcha verification is required.' },
        { status: 400 }
      );
    }

    // Verify hCaptcha token when enabled
    if (shouldVerifyCaptcha && body.captchaToken) {
      try {
        const captchaResponse = await fetch('https://hcaptcha.com/siteverify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            secret: captchaSecret || '',
            response: body.captchaToken,
          }),
        });

        const captchaResult = await captchaResponse.json();
        if (!captchaResult.success) {
          return NextResponse.json(
            { error: 'Captcha verification failed.' },
            { status: 400 }
          );
        }
      } catch (error) {
        console.error('Captcha verification error:', error);
        return NextResponse.json(
          { error: 'Captcha verification failed. Please try again.' },
          { status: 502 }
        );
      }
    }

    // Placeholder transport for MVP: log server-side until email provider is configured.
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      subject: body.subject,
      messagePreview: `${body.message.slice(0, 120)}${body.message.length > 120 ? '…' : ''}`,
      timestamp: new Date().toISOString(),
    });

    // Example: Send email via Resend
    // const { data, error } = await resend.emails.send({
    //   from: 'contact@abhishekbhave.com',
    //   to: 'abhishek@example.com',
    //   subject: `New Contact Form Submission: ${body.subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${body.name}</p>
    //     <p><strong>Email:</strong> ${body.email}</p>
    //     <p><strong>Subject:</strong> ${body.subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${body.message}</p>
    //   `,
    // });

    return NextResponse.json(
      { message: 'Message sent successfully.' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
} 