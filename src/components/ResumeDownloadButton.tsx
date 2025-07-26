'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Loader2 } from 'lucide-react';

export default function ResumeDownloadButton() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // This would be replaced with your actual resume PDF URL
      const response = await fetch('/api/resume');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Abhishek_Bhave_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        // Fallback to placeholder URL
        window.open('/resume.pdf', '_blank');
      }
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback to placeholder URL
      window.open('/resume.pdf', '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <motion.button
      onClick={handleDownload}
      disabled={isDownloading}
      className="btn-primary flex items-center gap-2 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      {isDownloading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
      )}
      {isDownloading ? 'Downloading...' : 'Download PDF Résumé'}
    </motion.button>
  );
} 