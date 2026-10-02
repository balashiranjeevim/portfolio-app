import { Component } from '@angular/core';
import { Icon } from '../ui/icon/icon';

export interface SkillItems {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  iconBgColor: string;
  skills: SkillItems[];
}

@Component({
  imports: [Icon],
  selector: 'app-skills',
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {
  categories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: 'code',
      iconBgColor: 'bg-blue-500/10 text-blue-500',
      skills: [
        { name: 'Angular', icon: 'code' },
        { name: 'React', icon: 'code' },
        { name: 'TypeScript', icon: 'code' },
        { name: 'Tailwind CSS', icon: 'code' },
      ],
    },
    {
      title: 'Backend Development',
      icon: 'database',
      iconBgColor: 'bg-emerald-500/10 text-emerald-500',
      skills: [
        { name: 'Node.js', icon: 'code' },
        { name: 'Express', icon: 'code' },
        { name: 'MongoDB', icon: 'database' },
      ],
    },
  ];
}
