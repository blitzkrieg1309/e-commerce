import { Component, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-profile',
  standalone: false,

  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent implements OnInit {
  users: any[] = [];
  id: string = '';

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.fetchUserById(this.userId());

    this.authService.isTokenExpired();
  }

  fetchUserById($id: string) {
    this.userService.getUserById($id).subscribe((data: any) => {
      this.users = [data];
    });
  }

  userId() {
    return (this.id = this.authService.getUserIdFromToken());
  }
}
