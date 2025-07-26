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