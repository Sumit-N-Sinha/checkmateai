import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private loginService: LoginService,
    private dialog: MatDialog
  ) { }

  buttonText: string = 'Login/SignUp';
  jwtToken: string| null = this.loginService.getToken();

  ngOnInit() {
    if (this.jwtToken != null) {
      this.buttonText = 'Logout';
    }
  }

  openLoginDialog(): void {
    this.dialog.open(LoginComponent, {
      width: '420px',
      maxWidth: '90vw',
      panelClass: 'auth-dialog',
      autoFocus: true
    });
  }

  openRegisterDialog(): void {
    this.dialog.open(RegisterComponent, {
      width: '420px',
      maxWidth: '90vw',
      panelClass: 'auth-dialog',
      autoFocus: true
    });
  }

  logout() {
    throw new Error('Method not implemented.');
  }

}
