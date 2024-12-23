import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginStatus = false;
  private token = 'auth_token';

  private loginApi = 'http://localhost:8080/api/login';
  private registerApi = 'http://localhost:8080/api/register';

  constructor(private http: HttpClient) {
    this.loginStatus = this.isLoggedIn();
  }

  setToken(token: string): void {
    localStorage.setItem(this.token, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.token);
  }

  removeToken(): void {
    localStorage.removeItem(this.token);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  decodeToken(): any {
    const token = this.getToken();
    if (token) {
      return jwtDecode(token);
    }
  }

  getUserIdFromToken() {
    const token = this.decodeToken();
    return token && (token as any).user_id ? (token as any).user_id : null;
  }

  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) return true;
    const decoded: any = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp < currentTime;
  }

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.loginApi, data).pipe(
      tap((response) => {
        if (response.token) {
          this.setToken(response.token);
        }
      })
    );
  }

  register(data: {
    useraname: string;
    password: string;
    email: string;
  }): Observable<any> {
    return this.http.post<any>(this.registerApi, data);
  }
}
