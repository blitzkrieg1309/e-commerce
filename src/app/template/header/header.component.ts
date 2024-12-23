import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  loginStatus = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginStatus = this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.removeToken();
    this.loginStatus = false;
    alert('logged out successfully');
    this.router.navigate(['/login']);
  }
}
