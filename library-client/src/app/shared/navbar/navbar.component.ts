import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { getURL, isURL, setURL } from 'src/app/services/url';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'  
})
export class NavbarComponent implements OnInit {

  constructor(private msgSvc: MessageService) { }

  items : MenuItem[];
  url: any;

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
    if(isURL()) {
      this.url = getURL();
    }
  }

  setApiUrl() : void {
    let regexMatch = /^(?:(?:https?):\/\/)[^]+/is;
    if (regexMatch.test(this.url)) {
      setURL(this.url);
      this.msgSvc.add({
        severity: 'info',
        summary: 'URL establecida',
        detail: this.url
      })
    } else {
      this.msgSvc.add({
        severity: 'error',
        summary: 'URL no válida',
        detail: this.url
      })
    }
  }
}
