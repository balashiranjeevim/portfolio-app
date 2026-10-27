import { Component } from '@angular/core';
import { Icon } from '../ui/icon/icon';

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

@Component({
  imports: [Icon],
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {
  experienceList: ExperienceItem[] = [
    {
      role: 'FullStack Developer',
      company: 'IXLY Technologies',
      period: 'MAY(2025) - AUG(2025)',
      description: 'Worked On Developing Job portal Management System',
    },
    {
      role: 'Associate Product Manager',
      company: 'ISAII TECHNOLOGIES PVT.LTD',
      period: 'NOV(2025) - MARCH(2026)',
      description: 'Increased Visitors Interaction in Tour Booking Website.',
    },
  ];
}
