import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: false,

  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];

  constructor(
    private orderService: OrdersService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchOrders();
    this.checkExpiredToken();
  }

  fetchOrders(): void {
    this.orderService.getOrders().subscribe((data: any) => {
      this.orders = data;
    });
  }

  checkExpiredToken(): void {
    if (this.authService.isTokenExpired()) {
      this.authService.removeToken();
      alert('Your session has expired. Please login again.');
      this.router.navigate(['/login']);
    }
  }
}
