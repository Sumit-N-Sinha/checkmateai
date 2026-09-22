import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(private dialog: MatDialog) {}

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

}
