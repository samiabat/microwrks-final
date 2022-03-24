import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuaredGuard implements CanActivate {
  constructor(private service:CustomerService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.service.loggedIn()){
      return true;
    }
    return false;
  }

}
