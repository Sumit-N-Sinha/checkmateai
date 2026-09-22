import { Component, Optional } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    @Optional() private dialogRef?: MatDialogRef<RegisterComponent>
  ) { }

  username: any;
  email: any;
  password: any;

  openLoginDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
      this.dialog.open(LoginComponent, {
        width: '420px',
        maxWidth: '90vw',
        panelClass: 'auth-dialog',
        autoFocus: true
      });
      return;
    }

    this.router.navigate(['/login']);
  }

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

    if (this.dialogRef) {
      this.dialogRef.close();
      this.dialog.open(LoginComponent, {
        width: '420px',
        maxWidth: '90vw',
        panelClass: 'auth-dialog',
        autoFocus: true
      });
      return;
    }

    this.router.navigate(['/login']);
  }

}
