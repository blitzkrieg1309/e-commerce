import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../servant';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-checkout',
  standalone: false,

  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  UserId: string | null;
  total = 0;
  quantity = 0;
  totalPrice = 0;

  constructor(
    private cartService: CartService,
    private router: Router,
    private authService: AuthService
  ) {
    this.UserId = this.authService.getUserIdFromToken();
  }
  ngOnInit(): void {
    this.checkExpiredToken();
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartService.fetchCartItems().subscribe((cartItems: any) => {
      this.cartItems = cartItems;
      this.calculateTotalPrice();
    });
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => {
      const price = parseFloat((item.product as any).price);
      return total + price * item.quantity;
    }, 0);
  }

  checkExpiredToken(): void {
    if (this.authService.isTokenExpired()) {
      this.authService.removeToken();
      alert('Your session has expired. Please login again.');
      this.router.navigate(['/login']);
    }
  }

  addToCart(productId: string, quantity: number): void {
    this.checkExpiredToken();
    if (!this.UserId) {
      alert('Please login to add items to cart');
      this.router.navigate(['/login']);
      return;
    }

    this.cartService.addToCart({ product_id: productId, quantity }).subscribe(
      () => {
        alert('Item added to cart');
        this.loadCartItems();
      },
      () => {
        alert('Failed to add item to cart');
      }
    );
  }

  deleteCartItem(id: string): void {
    this.checkExpiredToken();
    this.cartService.deleteCartItem(id).subscribe(() => {
      this.cartItems = this.cartItems.filter(
        (item) => item.id.toString() !== id
      );
      alert('Item removed from cart');
      this.loadCartItems();
      this.loadCartItems();
    });
  }

  checkOut(): void {
    this.checkExpiredToken();
    this.cartService.checkOut().subscribe(
      () => {
        alert('checkout successful');
        this.loadCartItems();
      },
      () => {
        alert('Failed to checkout');
      }
    );
  }
}
