import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navigationLinks: any[] = [
    { label: 'SERVICIOS', url: '/' },
    { label: 'RESEÑAS', url: '/' },
    { label: 'UBICACIÓN', url: '/' },
    { label: 'CONTACTO', url: '/' },
  ];
}
