import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      // Check local storage for the required value
      const isAuthenticated = !!localStorage.getItem("loginUser"); 
  
      if (isAuthenticated) {
        return true;
      } else {
        // Redirect to login page if not authenticated
        this.router.navigate(['/login']);
        return false;
      }
    }
  
}
