import React from 'react';
import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectTile from '@/components/ProjectTile';
import { SpeakingKpiCounter, AudienceKpiCounter, SponsorshipKpiCounter } from '@/components/KpiCounter';
import ContactForm from '@/components/ContactForm';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Abhishek Bhave | AI Engineer Portfolio',
  description:
    'Portfolio of Abhishek Bhave: AI product engineering, project delivery, and leadership experience across startups, enterprise, and research.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Resume CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to dive deeper?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore my complete professional journey, achievements, and technical expertise
          </p>
          <a href="/resume" className="btn-primary">
            View Full Résumé
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectTile
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                category={project.category}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                videoUrl={project.videoUrl}
              />
            ))}
          </div>
          <div className="text-center">
            <a href="/projects" className="btn-primary">
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Speaking Section */}
      <section id="speaking" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Speaking & Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <SpeakingKpiCounter value={15} label="Conference Talks" />
            <AudienceKpiCounter value={10000} label="Total Audience" />
            <SponsorshipKpiCounter value={250} label="Sponsorships Raised" />
          </div>
          <div className="text-center">
            <a href="/speaking" className="btn-primary">
              View Speaking Engagements
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <ContactForm />
        </div>
      </section>

      {/* Optional Playground CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Explore Technical Demos</h2>
          <p className="text-lg text-gray-600 mb-8">
            See interactive coding examples in the optional Tech Playground.
          </p>
          <a href="/playground" className="btn-secondary">
            Open Playground
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
} 