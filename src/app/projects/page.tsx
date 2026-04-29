import React from 'react';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectTile from '@/components/ProjectTile';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects | Abhishek Bhave',
  description:
    'Selected software, AI, and nonprofit product projects built by Abhishek Bhave.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-white via-accent to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Projects
          </h1>
          <p className="text-xl text-gray-600 text-center mb-8">
            Selected builds across software engineering, AI systems, and nonprofit product work.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
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
        </div>
      </section>

      <Footer />
    </main>
  );
} 