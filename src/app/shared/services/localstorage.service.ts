import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  public getLocalStorageData(): Object {
    return JSON.parse(localStorage.getItem("user"));
  }
  public getTypeUser(): string {
    return JSON.parse(localStorage.getItem("user")).profile;
  }
  public removeLocalStorageData(): void {
    localStorage.clear();
  }
  public setLocalStorageData(key: string, data: any): void {
    localStorage.setItem(key, data);
  }
}
