import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SpeakingKpiCounter, AudienceKpiCounter, SponsorshipKpiCounter } from '@/components/KpiCounter';

export default function SpeakingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-white via-accent to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Speaking & Leadership
          </h1>
          <p className="text-xl text-gray-600 text-center mb-8">
            Sharing insights on AI, cybersecurity, and the future of technology
          </p>
        </div>
      </section>

      {/* KPI Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Speaking Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SpeakingKpiCounter value={15} label="Conference Talks" />
            <AudienceKpiCounter value={10000} label="Total Audience" />
            <SponsorshipKpiCounter value={250} label="Sponsorships Raised" />
          </div>
        </div>
      </section>

      {/* Featured Talks */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Talks</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                "AI Ethics in Cybersecurity: Balancing Innovation and Responsibility"
              </h3>
              <p className="text-gray-600 mb-4">
                Black Hat USA 2024 • Las Vegas, NV
              </p>
              <p className="text-gray-700 mb-4">
                Explored the ethical implications of AI in cybersecurity, discussing bias in threat detection, 
                privacy concerns, and the responsibility of security professionals in the AI era.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">AI Ethics</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Cybersecurity</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Responsible AI</span>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                "Mental Health in Tech: Building Sustainable Careers"
              </h3>
              <p className="text-gray-600 mb-4">
                Grace Hopper Celebration 2024 • Orlando, FL
              </p>
              <p className="text-gray-700 mb-4">
                Shared research findings on mental health challenges in cybersecurity and tech, 
                providing actionable strategies for maintaining work-life balance and preventing burnout.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Mental Health</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Work-Life Balance</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Wellness</span>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                "The Future of AI-Powered Risk Assessment"
              </h3>
              <p className="text-gray-600 mb-4">
                AI Summit 2024 • San Francisco, CA
              </p>
              <p className="text-gray-700 mb-4">
                Presented innovative approaches to AI-driven risk assessment in enterprise environments, 
                showcasing real-world implementations and lessons learned from P&G's AI initiatives.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">AI Risk Assessment</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Enterprise AI</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Machine Learning</span>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                "Building Inclusive Tech Communities"
              </h3>
              <p className="text-gray-600 mb-4">
                CodePioneers Summit 2024 • Atlanta, GA
              </p>
              <p className="text-gray-700 mb-4">
                Discussed strategies for creating inclusive tech communities and mentoring programs, 
                sharing experiences from founding CodePioneers and supporting underrepresented developers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Diversity</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Mentorship</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Experience */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Experience</h2>
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Founder & CEO, CodePioneers</h3>
              <p className="text-primary font-medium mb-2">2023 - Present</p>
              <p className="text-gray-700 mb-4">
                Leading a nonprofit organization that connects developers with NGOs and small businesses, 
                managing a team of 8 developers and securing $50K in grants and partnerships.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">President, Georgia Tech Cybersecurity Club</h3>
              <p className="text-primary font-medium mb-2">2023 - 2024</p>
              <p className="text-gray-700 mb-4">
                Organized workshops, competitions, and networking events for 200+ members, 
                fostering a community of cybersecurity enthusiasts and professionals.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mentor, Women in Technology</h3>
              <p className="text-primary font-medium mb-2">2022 - Present</p>
              <p className="text-gray-700 mb-4">
                Mentoring 15+ women in technology, providing career guidance, technical training, 
                and support for navigating the tech industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 