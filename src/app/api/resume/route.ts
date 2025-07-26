import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // This would be replaced with your actual resume PDF URL
    const resumeUrl = process.env.RESUME_PDF_URL || '/resume.pdf';
    
    // Validate the URL
    if (!resumeUrl || resumeUrl === '/resume.pdf') {
      return NextResponse.json(
        { error: 'Resume PDF not configured' },
        { status: 404 }
      );
    }
    
    // For now, redirect to the PDF file
    return NextResponse.redirect(new URL(resumeUrl, request.url));
    
  } catch (error) {
    console.error('Resume download error:', error);
    return NextResponse.json(
      { error: 'Failed to download resume' },
      { status: 500 }
    );
  }
} 