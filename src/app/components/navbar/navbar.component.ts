import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private _Router: Router) {}

  logout(): void {
    localStorage.removeItem('_Token');
    this._Router.navigate(['/login']);
  }
}
