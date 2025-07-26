import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-white via-accent to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 text-center mb-8">
            Let's discuss opportunities, collaborations, or just say hello!
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
} 