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
    { label: 'SERVICIOS', url: '#services' },
    { label: 'RESEÑAS', url: '#ratings' },
    { label: 'UBICACIÓN', url: '#location' },
    { label: 'CONTACTO', url: '#contact' },
  ];
}
