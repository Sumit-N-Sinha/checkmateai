import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private router: Router,
    private snackBar: MatSnackBar
  ) { }

  username: any;
  email: any;
  password: any;

  onRegister() {
    if (!this.username || !this.email || !this.password) {
      this.snackBar.open('Please fill in all fields', 'Close', {
        duration: 3000,
      });
      return;
    }
    this.snackBar.open('Registration successful', 'Close', {
      duration: 3000,
    });
    this.router.navigate(['/login']);
  }

}
