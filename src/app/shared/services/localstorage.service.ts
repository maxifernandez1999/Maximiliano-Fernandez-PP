import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  public getLocalStorageData(): any {
    if (localStorage.getItem('user') !== null) {
      return JSON.parse(localStorage.getItem('user'));
    }
  }
  public getTypeUser(): string {
    if (localStorage.getItem('user') !== null) {
      return JSON.parse(localStorage.getItem('user')).profile;
    }
    return '';
  }
  public isLog(): boolean {
    return localStorage.hasOwnProperty('user');
  }
  public removeLocalStorageData(): void {
    localStorage.clear();
  }
  public setLocalStorageData(key: string, data: any): void {
    localStorage.setItem(key, data);
  }
}
