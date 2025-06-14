import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

// interface for the structure of each nav item
interface NavItem {
  id: string;
  title: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 220;
  }

  // Navbar list items
  nav: NavItem[] = [
    { id: 'hero', title: 'Home', icon: 'fa fa-home' },
    { id: 'about', title: 'About', icon: 'fa fa-user' },
    { id: 'skill', title: 'Skills', icon: 'fa fa-cogs' },
    { id: 'projects', title: 'Projects', icon: 'fa fa-briefcase' },
  ];
}
