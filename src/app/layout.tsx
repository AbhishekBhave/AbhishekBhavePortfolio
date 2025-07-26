import React from 'react';
import type { Metadata } from 'next';
import { Inter, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sourceSans3 = Source_Sans_3({ 
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Abhishek Bhave – Interactive Portfolio & Résumé Hub',
  description: 'Building impact at the intersection of AI, Business & Education. Stamps Eminence Scholar · AI Intern @ P&G · Founder @ CodePioneers',
  keywords: ['Abhishek Bhave', 'AI', 'Machine Learning', 'Business', 'Education', 'Portfolio', 'Résumé'],
  authors: [{ name: 'Abhishek Bhave' }],
  creator: 'Abhishek Bhave',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abhishekbhave.com',
    title: 'Abhishek Bhave – Interactive Portfolio & Résumé Hub',
    description: 'Building impact at the intersection of AI, Business & Education',
    siteName: 'Abhishek Bhave Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhishek Bhave – Interactive Portfolio & Résumé Hub',
    description: 'Building impact at the intersection of AI, Business & Education',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSans3.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
} 