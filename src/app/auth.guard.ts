import { Injectable } from '@angular/core';
import { AuthService } from './services/auth.service';
import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
  ActivatedRouteSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const isAuthenticated = this.authService.getToken();
    if (isAuthenticated && !this.authService.isTokenExpired()) {
      return true;
    } else {
      alert('You need to login first');
      this.authService.removeToken();
      return this.router.createUrlTree(['/login'], {
        queryParams: { redirect: state.url },
      });
    }
  }
}
