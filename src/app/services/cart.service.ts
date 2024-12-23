import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartItem } from '../servant';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:8080/api/cart';

  constructor(private http: HttpClient) {}

  addToCart(data: { product_id: string; quantity: number }): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, data);
  }

  fetchCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${this.apiUrl}`);
  }

  updateCartItem(data: {
    product_id: string;
    quantity: number;
  }): Observable<CartItem> {
    return this.http.put<CartItem>(`${this.apiUrl}`, data);
  }

  deleteCartItem(id: string): Observable<CartItem> {
    return this.http.delete<CartItem>(`${this.apiUrl}/delete/${id}`);
  }

  checkOut(): Observable<any> {
    return this.http.post(`${this.apiUrl}/checkout`, {});
  }
}
