import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TimelineCard from '@/components/TimelineCard';
import { resumeData, education, skills } from '@/data/resume';

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-white via-accent to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Interactive Résumé
          </h1>
          <p className="text-xl text-gray-600 text-center mb-8">
            Abhishek Bhave - Building impact at the intersection of AI, Business & Education
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="relative">
            {/* Timeline container */}
            <div className="space-y-8">
              {resumeData.map((item, index) => (
                <TimelineCard
                  key={index}
                  title={item.title}
                  company={item.company}
                  period={item.period}
                  location={item.location}
                  description={item.description}
                  achievements={item.achievements}
                  technologies={item.technologies}
                  logo={item.logo}
                  isLast={index === resumeData.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{education.degree}</h3>
            <p className="text-xl text-primary font-medium mb-2">{education.school}</p>
            <p className="text-gray-600 mb-2">{education.period} • {education.location}</p>
            <p className="text-gray-700 mb-6">{education.honors} • GPA: {education.gpa}</p>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Relevant Courses:</h4>
              <div className="flex flex-wrap gap-2">
                {education.relevantCourses.map((course, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 