import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
  };

  isLoading: boolean = false;
  errorMessages: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.isLoading = true;
    this.errorMessages = '';

    this.authService.login(this.loginData).subscribe(
      () => {
        this.isLoading = false;
        this.router.navigate(['/servants']);
      },
      (error) => {
        this.isLoading = false;
        this.errorMessages = error.error.message;
      }
    );
  }
}
