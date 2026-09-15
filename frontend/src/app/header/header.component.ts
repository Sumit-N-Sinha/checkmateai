import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private loginService: LoginService) { }

  buttonText: string = 'Login/SignUp';
  jwtToken: string| null = this.loginService.getToken();

  ngOnInit() {
    if (this.jwtToken != null) {
      this.buttonText = 'Logout';
    }
  }
  logout() {
    throw new Error('Method not implemented.');
  }

}
