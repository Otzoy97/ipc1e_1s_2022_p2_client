import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'  
})
export class NavbarComponent implements OnInit {

  constructor() { }

  items : MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Libros',
        icon: 'pi pi-book',
        routerLink: ['/book']
      },
      {
        label: 'Personas',
        icon: 'pi pi-user',
        routerLink: ['/person']
      },
      {
        label: 'Préstamos',
        icon: 'pi pi-check',
        routerLink: ['/lend']
      }
    ]
  }
}
