import { Component, Optional } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
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
    private loginService: LoginService,
    private dialog: MatDialog,
    @Optional() private dialogRef?: MatDialogRef<LoginComponent>
  ) { }

  openRegisterDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
      this.dialog.open(RegisterComponent, {
        width: '420px',
        maxWidth: '90vw',
        panelClass: 'auth-dialog',
        autoFocus: true
      });
      return;
    }

    this.router.navigate(['/register']);
  }

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
        if (this.dialogRef) {
          this.dialogRef.close();
        }
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
