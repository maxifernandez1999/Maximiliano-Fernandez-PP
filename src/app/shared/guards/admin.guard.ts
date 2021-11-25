import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalstorageService } from '../services/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private localStorageService: LocalstorageService,
    private router: Router
  ) {}
  canActivate(): boolean {
    if (this.localStorageService.getTypeUser() === 'admin') {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
