
import React from 'react';
import { Project, Blog, Service, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Nexus',
    description: 'A full-scale online store with real-time inventory and Stripe integration.',
    longDescription: 'This project demonstrates high-performance state management and complex API integrations. It features a custom cart system, persistent user sessions, and a dynamic product filtering engine.',
    techStack: ['React', 'Tailwind', 'Node.js', 'Stripe'],
    image: 'https://picsum.photos/seed/shop/800/500',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Web'
  },
  {
    id: '2',
    title: 'TaskFlow Dashboard',
    description: 'Project management tool for agile teams with kanban boards.',
    longDescription: 'TaskFlow is built using the latest React 18 patterns, including concurrent features. It uses Drag and Drop APIs for task movement and provides a seamless team collaboration environment.',
    techStack: ['React', 'Redux', 'TypeScript', 'Framer Motion'],
    image: 'https://picsum.photos/seed/task/800/500',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Web'
  },
  {
    id: '3',
    title: 'Pulse Social Media',
    description: 'Real-time social networking app with live messaging and feeds.',
    techStack: ['React', 'Firebase', 'Socket.io', 'Tailwind'],
    image: 'https://picsum.photos/seed/social/800/500',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Mobile'
  },
  {
    id: '4',
    title: 'FinTrack Pro',
    description: 'Personal finance and budgeting tracker with d3-based visualizations.',
    techStack: ['React', 'D3.js', 'Chart.js', 'PostgreSQL'],
    image: 'https://picsum.photos/seed/finance/800/500',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Web'
  },
  {
    id: '5',
    title: 'EcoWeather AI',
    description: 'Weather forecasting app using machine learning to predict local trends.',
    techStack: ['React', 'Python', 'OpenWeatherMap', 'SCSS'],
    image: 'https://picsum.photos/seed/weather/800/500',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Web'
  },
  {
    id: '6',
    title: 'Creative Canvas',
    description: 'Collaborative drawing tool with real-time canvas synchronization.',
    techStack: ['React', 'Canvas API', 'WebSockets', 'Styled-Components'],
    image: 'https://picsum.photos/seed/canvas/800/500',
    liveUrl: '#',
    githubUrl: '#',
    category: 'UI/UX'
  }
];

export const SKILLS: Skill[] = [
  { name: 'HTML5', level: 95, category: 'Frontend', icon: '🌐' },
  { name: 'CSS3', level: 90, category: 'Frontend', icon: '🎨' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend', icon: '🍃' },
  { name: 'JavaScript', level: 92, category: 'Frontend', icon: '🟨' },
  { name: 'React.js', level: 94, category: 'Frontend', icon: '⚛️' },
  { name: 'TypeScript', level: 85, category: 'Frontend', icon: '📘' },
  { name: 'Git & GitHub', level: 88, category: 'Tools', icon: '🔀' },
  { name: 'REST API', level: 90, category: 'Tools', icon: '🔌' },
  { name: 'Responsive Design', level: 95, category: 'Design', icon: '📱' },
  { name: 'UI/UX Basics', level: 80, category: 'Design', icon: '✨' },
];

export const BLOGS: Blog[] = [
  {
    id: '1',
    title: 'Mastering React 18 Patterns',
    excerpt: 'Deep dive into useTransition, useDeferredValue, and concurrent rendering.',
    content: 'React 18 brought a significant shift in how we handle rendering. In this post, we explore the nuances of concurrent mode...',
    date: 'March 15, 2024',
    author: 'Abdulatif',
    category: 'Frontend',
    image: 'https://picsum.photos/seed/blog1/800/400'
  },
  {
    id: '2',
    title: 'Tailwind CSS vs. Styled Components',
    excerpt: 'A comprehensive comparison of utility-first vs. runtime CSS approach.',
    content: 'The styling landscape in the React ecosystem is vast. We analyze performance, developer experience, and scalability...',
    date: 'February 20, 2024',
    author: 'Abdulatif',
    category: 'Styling',
    image: 'https://picsum.photos/seed/blog2/800/400'
  }
];

export const SERVICES: Service[] = [
  { id: '1', title: 'Web Development', description: 'Building fast, accessible, and high-converting web applications.', icon: '💻' },
  { id: '2', title: 'Mobile Apps', description: 'Cross-platform mobile experiences that feel native.', icon: '📱' },
  { id: '3', title: 'UI/UX Design', description: 'User-centric designs that prioritize usability and aesthetics.', icon: '✒️' },
];

export const EXPERIENCES: Experience[] = [
  { id: '1', company: 'TechNova Solutions', role: 'Senior Frontend Developer', period: '2021 - Present', description: 'Leading the development of complex enterprise dashboards and mentoring junior developers.' },
  { id: '2', company: 'Digital Pulse', role: 'Frontend Engineer', period: '2019 - 2021', description: 'Spearheaded the migration of legacy jQuery apps to modern React functional components.' },
];
