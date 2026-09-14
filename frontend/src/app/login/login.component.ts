import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router : Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private loginService: LoginService
  ) { }
  onSubmit() {
    if (!this.email || !this.password) {
      this.snackBar.open('Please fill in all fields', 'Close', {
        duration: 3000,
      });
      return;
    }
    this.loginService.login(this.email, this.password).subscribe({
      next: () => {
        this.snackBar.open('Login successful', 'Close', {
          duration: 3000,
        });
        this.router.navigate(['/home']);
      },
      error: () => {
        this.snackBar.open('Login failed', 'Close', {
          duration: 3000,
        });
      }
    });
  }
}
