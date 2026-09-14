import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
