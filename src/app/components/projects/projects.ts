import { Component, signal } from '@angular/core';
import { Icon } from '../ui/icon/icon';

export interface ProjectItem {
  title: string;
  description: string;
  category: 'Full-Stack' | 'Frontend' | 'AI / Tools';
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  icon: string;
}

@Component({
  imports: [Icon],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  readonly categories: string[] = ['All', 'Full-Stack', 'Frontend', 'AI / Tools'];
  selectedCategory = signal<string>('All');

  projects: ProjectItem[] = [
    {
      title: 'Riderro - Ride Booking App',
      description:
        'A modern and responsive ride-booking platform that enables users to book rides, view dynamic fares, manage trip histories, and track ride statuses in real time.',
      category: 'Full-Stack',
      tags: ['TypeScript', 'Angular', 'Tailwind CSS', 'Node.js', 'Express', 'REST API'],
      githubUrl: 'https://github.com/balashiranjeevim/riderro',
      featured: true,
      icon: 'laptop',
    },
    {
      title: 'Job Portal Management System',
      description:
        'End-to-end job portal developed with role-based access for recruiters and candidates, featuring job listings, resume profile management, and candidate tracking workflows.',
      category: 'Full-Stack',
      tags: ['Angular', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      githubUrl: 'https://github.com/balashiranjeevim',
      featured: true,
      icon: 'briefcase',
    },
    {
      title: 'Bulbin Labs Platform',
      description:
        'Official website and showcase for Bulbin Labs, featuring a product-first approach to building software that solves practical business challenges with fast modern web tech.',
      category: 'Frontend',
      tags: ['TypeScript', 'Angular', 'Tailwind CSS', 'Responsive UI'],
      githubUrl: 'https://github.com/balashiranjeevim/bulbin-labs',
      featured: false,
      icon: 'code',
    },
    {
      title: 'Zonote - Minimalist Notes App',
      description:
        'A clean, distraction-free note-taking application designed for swift idea capture, category tagging, search functionality, and persistent local storage.',
      category: 'Frontend',
      tags: ['TypeScript', 'HTML5', 'CSS3', 'Local Storage'],
      githubUrl: 'https://github.com/balashiranjeevim/zonote',
      featured: false,
      icon: 'folder',
    },
    {
      title: 'Smart Campus Information Portal',
      description:
        'A responsive university showcase portal presenting department details, academic curriculum, campus infrastructure, and student resources.',
      category: 'Frontend',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web'],
      githubUrl: 'https://github.com/balashiranjeevim/smart-campus-page',
      featured: false,
      icon: 'book-open',
    },
    {
      title: 'Agentic AI Systems & Tooling',
      description:
        'Explorations and prototypes implementing autonomous agent loops, prompt engineering chains, and LLM tool-calling APIs for developer workflows.',
      category: 'AI / Tools',
      tags: ['Agentic AI', 'TypeScript', 'Python', 'LLM APIs'],
      githubUrl: 'https://github.com/balashiranjeevim',
      featured: false,
      icon: 'sparkles',
    },
  ];

  get filteredProjects(): ProjectItem[] {
    const active = this.selectedCategory();
    if (active === 'All') {
      return this.projects;
    }
    return this.projects.filter((p) => p.category === active);
  }

  setCategory(category: string): void {
    this.selectedCategory.set(category);
  }
}
