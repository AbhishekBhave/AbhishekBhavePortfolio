'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Award } from 'lucide-react';

interface KpiCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon?: React.ReactNode;
  color?: 'primary' | 'blue' | 'green' | 'purple';
}

export default function KpiCounter({
  value,
  label,
  suffix = '',
  prefix = '',
  icon,
  color = 'primary',
}: KpiCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const colorClasses = {
    primary: 'text-primary',
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
  };

  const bgColorClasses = {
    primary: 'bg-primary/10',
    blue: 'bg-blue-100',
    green: 'bg-green-100',
    purple: 'bg-purple-100',
  };

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      const stepDuration = duration / steps;

      let currentCount = 0;
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${bgColorClasses[color]} mb-4`}>
        {icon || (
          <TrendingUp className={`w-8 h-8 ${colorClasses[color]}`} />
        )}
      </div>
      
      <motion.div
        className={`text-4xl font-bold ${colorClasses[color]} mb-2`}
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : { scale: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {prefix}{count.toLocaleString()}{suffix}
      </motion.div>
      
      <p className="text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
}

// Predefined KPI components for common use cases
export function SpeakingKpiCounter({ value, label }: { value: number; label: string }) {
  return (
    <KpiCounter
      value={value}
      label={label}
      icon={<Award className="w-8 h-8 text-primary" />}
      color="primary"
    />
  );
}

export function AudienceKpiCounter({ value, label }: { value: number; label: string }) {
  return (
    <KpiCounter
      value={value}
      label={label}
      suffix="+"
      icon={<Users className="w-8 h-8 text-blue-600" />}
      color="blue"
    />
  );
}

export function SponsorshipKpiCounter({ value, label }: { value: number; label: string }) {
  return (
    <KpiCounter
      value={value}
      label={label}
      prefix="$"
      suffix="k"
      icon={<DollarSign className="w-8 h-8 text-green-600" />}
      color="green"
    />
  );
} 
