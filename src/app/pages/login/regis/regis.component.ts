import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-regis',
  standalone: false,

  templateUrl: './regis.component.html',
  styleUrl: './regis.component.css',
})
export class RegisComponent {
  regisData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  errorMessage: string = '';
  isLoading: boolean = false;
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.regisData.password !== this.regisData.confirmPassword) {
      this.errorMessage = 'Password and confirm password must be the same';

      this.isLoading = true;
      this.errorMessage = '';
      this.successMessage = '';

      this.authService
        .register({
          useraname: this.regisData.username,
          password: this.regisData.password,
          email: this.regisData.email,
        })
        .subscribe({
          next: (response) => {
            this.isLoading = false;
            this.successMessage = 'Registration successful';
            this.router.navigate(['/login']);
          },
          error: (error) => {
            this.isLoading = false;
            this.errorMessage = error.error.message || 'Registration failed';
          },
        });
    }
  }
}
