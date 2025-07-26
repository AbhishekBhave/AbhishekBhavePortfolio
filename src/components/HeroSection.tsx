'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';
import ResumeDownloadButton from './ResumeDownloadButton';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen gradient-bg overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-bounce-gentle" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-32 w-1 h-1 bg-primary rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-bounce-gentle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-primary rounded-full animate-bounce-gentle" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
        >
          Building impact at the intersection of{' '}
          <span className="text-primary bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
            AI, Business & Education
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-700 mb-8 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Stamps Eminence Scholar · AI Intern @ P&G · Founder @ CodePioneers
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <ResumeDownloadButton />
          
          <Link
            href="/resume"
            className="btn-secondary flex items-center gap-2 group"
          >
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            View Interactive Résumé
          </Link>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500"
          >
            <ArrowDown className="w-6 h-6 mb-2" />
            <span className="text-sm">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 