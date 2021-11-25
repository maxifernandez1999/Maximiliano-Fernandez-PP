import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userLog:boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    private localStorageService: LocalstorageService
  ) {}

  ngOnInit(): void {this.userLog = this.getUserLog();}
  public signOut(): void {
    this.authService
      .logout()
      .then((response) => {
        this.authService.isLoged = false;
        this.localStorageService.removeLocalStorageData();
        this.router.navigate(['login']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  public getUserLog():boolean{
    return this.localStorageService.getTypeUser() === "empleado" ? true : false;
  }
  public redirect(path: string): void {
    switch (path) {
      case 'add':
        this.router.navigate(['add']);
        break;
      case 'container':
        this.router.navigate(['container']);
        break;
      case 'detail':
        this.router.navigate(['detail']);
        break;
      case 'load':
        this.router.navigate(['load-container']);
        break;

      default:
        this.router.navigate(['login']);
        break;
    }
  }
}
