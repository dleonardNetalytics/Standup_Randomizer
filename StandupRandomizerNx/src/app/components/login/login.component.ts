import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule, MatCard, MatCardHeader, MatCardContent],
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: response => {
        if (response) {
          this.router.navigate(['/']).then(r => console.log('Navigated to /'));
        } else {
          this.showErrorMessage('Invalid credentials');
        }
      },
      error: error => {
        this.showErrorMessage('An error occurred. Please try again.');
        console.error('Login error:', error);
      }
    });
  }

  private showErrorMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'bottom',
    });
  }
}
