'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface TimelineCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
  isLast?: boolean;
}

export default function TimelineCard({
  title,
  company,
  period,
  location,
  description,
  achievements,
  technologies,
  logo,
  isLast = false,
}: TimelineCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200">
        {/* Timeline dot */}
        <div className="absolute left-1/2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg transform -translate-x-1/2" />
        
        {/* Timeline line continuation (if not last item) */}
        {!isLast && (
          <div className="absolute left-1/2 top-10 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2" />
        )}
      </div>

      {/* Content */}
      <div className="ml-20">
        <motion.div
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-lg text-primary font-medium mb-2">{company}</p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {period}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {location}
                </div>
              </div>
            </div>
            {logo && (
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center ml-4">
                <img src={logo} alt={`${company} logo`} className="w-8 h-8 object-contain" />
              </div>
            )}
          </div>
          
          {/* Description */}
          <p className="text-gray-700 mb-4">{description}</p>
          
          {/* Technologies preview */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                +{technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Expand/Collapse button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200"
          >
            <span className="text-sm font-medium">
              {isExpanded ? 'Show less' : 'View achievements'}
            </span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>

          {/* Expanded content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-6 pt-6 border-t border-gray-200">
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {achievements.map((achievement, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3 text-gray-700"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Full technologies list */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
} 