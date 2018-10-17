import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate  {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return (this.authService.securityContext != null && this.authService.securityContext.role === 'MANAGER');
  }
}
