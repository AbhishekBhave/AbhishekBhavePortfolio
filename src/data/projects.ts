export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'web' | 'ai' | 'mobile' | 'research' | 'open-source';
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: 'codepioneers-platform',
    title: 'CodePioneers Platform',
    description: 'Nonprofit platform connecting developers with NGOs and small businesses for digital transformation.',
    longDescription: 'A comprehensive web platform that bridges the gap between skilled developers and organizations in need of digital solutions. Features include project matching, progress tracking, and resource sharing.',
    image: '/projects/codepioneers.jpg',
    technologies: ['React', 'Next.js', 'TypeScript', 'Supabase', 'TailwindCSS', 'Vercel'],
    category: 'web',
    githubUrl: 'https://github.com/abhishekbhave/codepioneers',
    liveUrl: 'https://codepioneers.org',
    videoUrl: 'https://youtube.com/watch?v=example',
    featured: true,
    year: 2024
  },
  {
    id: 'p-g-ai-risk-engine',
    title: 'P&G AI Risk Engine',
    description: 'AI-powered risk assessment engine using PySpark and vector databases for supply chain optimization.',
    longDescription: 'Developed a scalable machine learning system that processes millions of supply chain records daily to identify potential risks and anomalies. The system uses vector similarity search and automated retraining pipelines.',
    image: '/projects/pg-ai-engine.jpg',
    technologies: ['Python', 'PySpark', 'Delta Lake', 'Vector DB', 'Azure', 'MLflow'],
    category: 'ai',
    featured: true,
    year: 2024
  },
  {
    id: 'mental-health-cybersecurity',
    title: 'Mental Health in Cybersecurity',
    description: 'Research framework for early detection of burnout and stress indicators in cybersecurity professionals.',
    longDescription: 'A comprehensive research project that developed machine learning models to predict stress levels and burnout in cybersecurity professionals. The framework includes data collection, analysis, and intervention recommendations.',
    image: '/projects/mental-health.jpg',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Jupyter', 'SQL'],
    category: 'research',
    githubUrl: 'https://github.com/abhishekbhave/cybersecurity-mental-health',
    featured: true,
    year: 2024
  },
  {
    id: 'real-time-notifications',
    title: 'Real-time Notification System',
    description: 'Scalable notification system serving 100K+ users with sub-second latency.',
    longDescription: 'Built a high-performance notification system that handles real-time messaging for enterprise applications. Features include WebSocket connections, message queuing, and intelligent delivery optimization.',
    image: '/projects/notifications.jpg',
    technologies: ['React', 'Node.js', 'WebSockets', 'Redis', 'PostgreSQL', 'AWS'],
    category: 'web',
    githubUrl: 'https://github.com/abhishekbhave/notification-system',
    liveUrl: 'https://demo-notifications.vercel.app',
    featured: false,
    year: 2023
  },
  {
    id: 'data-visualization-dashboard',
    title: 'Interactive Data Dashboard',
    description: 'Real-time data visualization dashboard with D3.js and interactive charts.',
    longDescription: 'A comprehensive dashboard that visualizes complex datasets with interactive charts, filters, and real-time updates. Built with modern web technologies for optimal performance.',
    image: '/projects/dashboard.jpg',
    technologies: ['React', 'D3.js', 'TypeScript', 'WebSocket', 'Chart.js', 'TailwindCSS'],
    category: 'web',
    githubUrl: 'https://github.com/abhishekbhave/data-dashboard',
    liveUrl: 'https://data-dashboard.vercel.app',
    featured: false,
    year: 2023
  },
  {
    id: 'mobile-fitness-app',
    title: 'Fitness Tracking App',
    description: 'Cross-platform mobile app for workout tracking and progress monitoring.',
    longDescription: 'A React Native application that helps users track workouts, monitor progress, and achieve fitness goals. Features include workout planning, progress charts, and social sharing.',
    image: '/projects/fitness-app.jpg',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Expo', 'Chart.js'],
    category: 'mobile',
    githubUrl: 'https://github.com/abhishekbhave/fitness-tracker',
    featured: false,
    year: 2023
  },
  {
    id: 'open-source-library',
    title: 'React Component Library',
    description: 'Open-source component library with 100+ reusable UI components.',
    longDescription: 'A comprehensive React component library built with TypeScript and Storybook. Includes accessibility features, theming support, and extensive documentation.',
    image: '/projects/component-library.jpg',
    technologies: ['React', 'TypeScript', 'Storybook', 'Jest', 'Rollup', 'TailwindCSS'],
    category: 'open-source',
    githubUrl: 'https://github.com/abhishekbhave/react-components',
    liveUrl: 'https://react-components.vercel.app',
    featured: false,
    year: 2023
  },
  {
    id: 'blockchain-supply-chain',
    title: 'Blockchain Supply Chain',
    description: 'Blockchain-based supply chain tracking system for transparency and traceability.',
    longDescription: 'A decentralized application that uses blockchain technology to track products through the supply chain, ensuring transparency and preventing counterfeiting.',
    image: '/projects/blockchain.jpg',
    technologies: ['Solidity', 'React', 'Web3.js', 'IPFS', 'Hardhat', 'Ethereum'],
    category: 'web',
    githubUrl: 'https://github.com/abhishekbhave/blockchain-supply-chain',
    featured: false,
    year: 2022
  }
];

export const projectCategories = [
  { id: 'all', name: 'All Projects', count: projects.length },
  { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length },
  { id: 'ai', name: 'AI & Machine Learning', count: projects.filter(p => p.category === 'ai').length },
  { id: 'mobile', name: 'Mobile Development', count: projects.filter(p => p.category === 'mobile').length },
  { id: 'research', name: 'Research', count: projects.filter(p => p.category === 'research').length },
  { id: 'open-source', name: 'Open Source', count: projects.filter(p => p.category === 'open-source').length }
]; 