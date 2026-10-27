import { Component } from '@angular/core';
import { Icon } from '../ui/icon/icon';

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location?: string;
  period: string;
  grade?: string;
  description: string;
  skills: string[];
  icon: string;
  highlight?: boolean;
}

@Component({
  imports: [Icon],
  selector: 'app-education',
  styleUrl: './education.css',
  templateUrl: './education.html',
})
export class Education {
  educationList: EducationItem[] = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Artificial Intelligence & Data Science',
      institution: 'Anna University Affiliated Engineering College',
      location: 'Tamil Nadu, India',
      period: '2022 - 2026',
      description:
        'Focused on core computer science foundations, machine learning algorithms, modern full-stack web architectures, and data-driven problem solving.',
      skills: [
        'Data Structures & Algorithms',
        'Artificial Intelligence',
        'Machine Learning',
        'DBMS & SQL',
        'Full-Stack Web Dev',
        'Object-Oriented Programming',
      ],
      icon: 'graduation-cap',
      highlight: true,
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      field: 'Computer Science & Mathematics',
      institution: 'State Board of School Education',
      location: 'Tamil Nadu, India',
      period: '2020 - 2022',
      description:
        'Built strong logical and mathematical foundations, with early hands-on introduction to algorithms and computer programming concepts.',
      skills: ['Mathematics', 'Computer Science', 'Physics', 'Problem Solving'],
      icon: 'book-open',
      highlight: false,
    },
    {
      degree: 'Technical Certifications & Applied Learning',
      field: 'Modern Full-Stack Engineering & AI Systems',
      institution: 'Self-Directed & Professional Projects',
      location: 'Remote / Online',
      period: '2023 - Present',
      description:
        'Dedicated to continuous growth by building production-grade web applications, exploring Agentic AI systems, and sharpening modern framework skills.',
      skills: ['Angular & TypeScript', 'Tailwind CSS', 'Node.js & Express', 'MongoDB', 'Agentic AI'],
      icon: 'sparkles',
      highlight: false,
    },
  ];
}
