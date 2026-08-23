import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router : Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }
  onSubmit() {
    if (!this.username || !this.password) {
      this.snackBar.open('Please fill in all fields', 'Close', {
        duration: 3000,
      });
      return;
    }
    this.snackBar.open('Login successful', 'Close', {
      duration: 3000,
    });
    this.router.navigate(['/home']);
  }

}
