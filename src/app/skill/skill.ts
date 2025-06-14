import { Component } from '@angular/core';

// Structure for each skill item
interface SkillItem {
  name: string;
  progress: string;
}

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.html',
  styleUrl: './skill.scss',
})
export class Skill {
  ninetyPercent = '90%';
  seventyPercent = '70%';

  // Technologies skills list items
  techSkills: SkillItem[] = [
    { name: 'HTML5, CSS3', progress: '90' },
    { name: 'JavaScript ES6', progress: '80' },
    { name: 'Angular, React', progress: '70' },
    { name: 'Python, C++', progress: '95' },
    { name: 'BootStrap, SASS, TailWind', progress: '90' },
  ];

  // Tools skills list items
  toolSkills: SkillItem[] = [
    { name: 'Git, GitHub', progress: '85' },
    { name: 'Microsoft Office', progress: '90' },
    { name: 'Linux, Windows', progress: '70' },
    { name: 'MySql, PgSql', progress: '90' },
    { name: 'Docker, Kubernetes', progress: '60' },
  ];
}
