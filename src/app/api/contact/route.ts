import { NextRequest, NextResponse } from 'next/server';

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
  captchaToken?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactData = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate message length
    if (body.message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    // Verify hCaptcha token (if provided)
    if (body.captchaToken) {
      try {
        const captchaResponse = await fetch('https://hcaptcha.com/siteverify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            secret: process.env.HCAPTCHA_SECRET_KEY || '',
            response: body.captchaToken,
          }),
        });

        const captchaResult = await captchaResponse.json();
        if (!captchaResult.success) {
          return NextResponse.json(
            { error: 'Captcha verification failed' },
            { status: 400 }
          );
        }
      } catch (error) {
        console.error('Captcha verification error:', error);
        // Continue without captcha verification in development
      }
    }

    // Send email notification
    // This would be replaced with your actual email service (SendGrid, Resend, etc.)
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
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
      { message: 'Message sent successfully' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 