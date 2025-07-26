'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/abhishekbhave',
    icon: Linkedin,
    color: 'hover:text-blue-600',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/abhishekbhave',
    icon: Github,
    color: 'hover:text-gray-800',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/abhishekbhave',
    icon: Twitter,
    color: 'hover:text-blue-400',
  },
  {
    name: 'Email',
    href: 'mailto:abhishek@example.com',
    icon: Mail,
    color: 'hover:text-red-500',
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Abhishek Bhave</h3>
            <p className="text-gray-600 text-sm">
              Building impact at the intersection of AI, Business & Education
            </p>
            <p className="text-gray-600 text-sm">
              Stamps Eminence Scholar · AI Intern @ P&G · Founder @ CodePioneers
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#resume" className="text-gray-600 hover:text-primary transition-colors">
                  Interactive Résumé
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-primary transition-colors">
                  Projects Lab
                </a>
              </li>
              <li>
                <a href="#playground" className="text-gray-600 hover:text-primary transition-colors">
                  Tech Playground
                </a>
              </li>
              <li>
                <a href="#speaking" className="text-gray-600 hover:text-primary transition-colors">
                  Speaking & Leadership
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2024 Abhishek Bhave. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with Next.js, TypeScript & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 