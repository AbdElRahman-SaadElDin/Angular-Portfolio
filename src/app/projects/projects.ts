import { Component } from '@angular/core';

// Structure of each project card item
interface ProjectItem {
  id: number;
  title: string;
  technologies: string;
  img: string;
  demoRef: string;
  sourceRef: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  demo = 'Live Demo';
  code = 'Source code';

  // Projects list items
  projectList: ProjectItem[] = [
    {
      id: 1,
      title: 'Landing Page',
      technologies: 'TypeScript, Localstorage, SCSS, Bootstrap',
      img: './project1.png',
      demoRef: 'https://abdelrahman-saadeldin.github.io/Lookscout-responsive/',
      sourceRef:
        'https://github.com/AbdElRahman-SaadElDin/Lookscout-responsive',
    },
    {
      id: 2,
      title: 'TODO App',
      technologies: ' HTML5, CSS3, JavaScript, Localstorage',
      img: './project2.png',
      demoRef: 'https://abdelrahman-saadeldin.github.io/TodoApp/',
      sourceRef: 'https://github.com/AbdElRahman-SaadElDin/TodoApp',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      technologies: 'Angular, HTML5, SASS, Bootstrap',
      img: './project3.png',
      demoRef:
        'https://abdelrahman-saadeldin.github.io/Finsweet-landing-page-ITI/',
      sourceRef:
        'https://github.com/AbdElRahman-SaadElDin/Finsweet-landing-page-ITI',
    },
  ];
}
