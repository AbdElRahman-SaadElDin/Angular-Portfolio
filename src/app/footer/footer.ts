import { Component } from '@angular/core';

interface Contact {
  icon: string;
  label: string;
  link: string;
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  contacts: Contact[] = [
    {
      icon: 'fa fa-envelope',
      label: 'Email',
      link: 'mailto:abdelrahman.mohamed6110@gmail.com',
    },
    {
      icon: 'fa fa-facebook',
      label: 'Facebook',
      link: 'https://www.facebook.com/AbdElRahmanSaad8/',
    },
    {
      icon: 'fa fa-linkedin',
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/abdelrahman-saad-eldin/',
    },
    {
      icon: 'fa fa-github',
      label: 'GitHub',
      link: 'https://github.com/AbdElRahman-SaadElDin',
    },
  ];
}
