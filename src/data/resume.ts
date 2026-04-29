export interface ResumeItem {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export const resumeData: ResumeItem[] = [
  {
    id: 'p-g-ai-intern',
    title: 'AI Intern',
    company: 'Procter & Gamble',
    period: 'May 2024 - Aug 2024',
    location: 'Cincinnati, OH',
    description: 'Developed and deployed AI-powered risk assessment engine using PySpark and vector databases, improving risk detection accuracy by 40%.',
    achievements: [
      'Built scalable data pipeline processing 10M+ records daily using PySpark and Delta Lake',
      'Implemented vector similarity search reducing false positives by 35%',
      'Created automated ML model retraining pipeline reducing manual effort by 60%',
      'Collaborated with cross-functional teams to integrate AI solutions into production systems'
    ],
    technologies: ['Python', 'PySpark', 'Delta Lake', 'Vector DB', 'Azure', 'MLflow', 'Docker'],
    logo: '/logos/pg-logo.png'
  },
  {
    id: 'codepioneers-founder',
    title: 'Founder & Lead Developer',
    company: 'CodePioneers',
    period: 'Jan 2023 - Present',
    location: 'Remote',
    description: 'Founded nonprofit platform connecting developers with NGOs and small businesses, delivering 15+ websites and digital solutions.',
    achievements: [
      'Led team of 8 developers delivering 15+ websites for NGOs and small businesses',
      'Implemented CI/CD pipeline reducing deployment time by 70%',
      'Secured $50K in grants and partnerships for platform development',
      'Mentored 20+ junior developers in modern web development practices'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Supabase', 'Vercel', 'GitHub Actions'],
    logo: '/logos/codepioneers-logo.png'
  },
  {
    id: 'research-assistant',
    title: 'Research Assistant',
    company: 'Georgia Tech',
    period: 'Sep 2023 - May 2024',
    location: 'Atlanta, GA',
    description: 'Conducted research on mental health in cybersecurity, developing framework for early detection of burnout and stress indicators.',
    achievements: [
      'Published research paper on mental health detection in cybersecurity professionals',
      'Developed ML model achieving 85% accuracy in stress level prediction',
      'Presented findings at 3 national conferences including Black Hat USA',
      'Secured $25K research grant for continued study development'
    ],
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Jupyter', 'SQL'],
    logo: '/logos/gt-logo.png'
  },
  {
    id: 'software-engineer-intern',
    title: 'Software Engineer Intern',
    company: 'TechCorp',
    period: 'May 2023 - Aug 2023',
    location: 'San Francisco, CA',
    description: 'Developed full-stack features for enterprise SaaS platform, improving user engagement by 25% through enhanced UI/UX.',
    achievements: [
      'Built real-time notification system serving 100K+ users',
      'Optimized database queries reducing page load times by 40%',
      'Implemented automated testing increasing code coverage to 85%',
      'Mentored 2 junior interns in React and Node.js development'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Jest'],
    logo: '/logos/techcorp-logo.png'
  }
];

export const speakingStats = {
  talks: 15,
  audience: 10000,
  sponsorshipsRaisedK: 250,
};

export const featuredTalks = [
  {
    title: 'AI Ethics in Cybersecurity: Balancing Innovation and Responsibility',
    event: 'Black Hat USA 2024',
    location: 'Las Vegas, NV',
    summary:
      'Explored ethical trade-offs in AI-assisted threat detection, including bias mitigation, model transparency, and privacy safeguards.',
    tags: ['AI Ethics', 'Cybersecurity', 'Responsible AI'],
  },
  {
    title: 'Mental Health in Tech: Building Sustainable Careers',
    event: 'Grace Hopper Celebration 2024',
    location: 'Orlando, FL',
    summary:
      'Shared practical burnout-prevention frameworks and evidence-based habits for engineering teams operating in high-stress environments.',
    tags: ['Mental Health', 'Career Sustainability', 'Wellness'],
  },
  {
    title: 'The Future of AI-Powered Risk Assessment',
    event: 'AI Summit 2024',
    location: 'San Francisco, CA',
    summary:
      "Presented real-world learnings from enterprise AI risk scoring systems, including model governance and production reliability.",
    tags: ['AI Risk Assessment', 'Enterprise AI', 'Machine Learning'],
  },
  {
    title: 'Building Inclusive Tech Communities',
    event: 'CodePioneers Summit 2024',
    location: 'Atlanta, GA',
    summary:
      'Covered mentorship program design, inclusive hiring pipelines, and community-building practices for long-term technical growth.',
    tags: ['Diversity', 'Mentorship', 'Community'],
  },
];

export const leadershipRoles = [
  {
    title: 'Founder & CEO, CodePioneers',
    period: '2023 - Present',
    summary:
      'Leading a nonprofit that connects developers with NGOs and small businesses, coordinating a distributed engineering team and strategic partnerships.',
  },
  {
    title: 'President, Georgia Tech Cybersecurity Club',
    period: '2023 - 2024',
    summary:
      'Organized technical workshops and community events for 200+ members to strengthen practical security skills and career readiness.',
  },
  {
    title: 'Mentor, Women in Technology',
    period: '2022 - Present',
    summary:
      'Mentored students and early-career professionals through project coaching, interview preparation, and long-term career planning.',
  },
];

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'Georgia Institute of Technology',
  period: '2021 - 2025',
  location: 'Atlanta, GA',
  honors: 'Stamps Eminence Scholar',
  gpa: '3.9/4.0',
  relevantCourses: [
    'Machine Learning',
    'Data Structures & Algorithms',
    'Database Systems',
    'Software Engineering',
    'Computer Networks',
    'Cybersecurity'
  ]
};

export const skills = {
  programming: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
  frameworks: ['React', 'Next.js', 'Node.js', 'Express', 'Django', 'Spring Boot'],
  cloud: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
  databases: ['PostgreSQL', 'MongoDB', 'Redis', 'Delta Lake', 'Vector DB'],
  tools: ['Git', 'GitHub Actions', 'Jenkins', 'Jira', 'Figma', 'Tableau'],
  languages: ['English (Native)', 'Hindi (Fluent)', 'Spanish (Conversational)']
}; 