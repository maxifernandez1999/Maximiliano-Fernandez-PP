import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalstorageService } from '../services/localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private localStorageService: LocalstorageService,
    private router: Router
  ) {}
  canActivate(): boolean {
    if (this.localStorageService.getTypeUser() === 'administrador') {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
