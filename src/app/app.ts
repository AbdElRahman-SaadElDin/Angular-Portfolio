import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skill } from './skill/skill';
import { Projects } from './projects/projects';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skill, Projects, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Angular-Portfolio';
}
