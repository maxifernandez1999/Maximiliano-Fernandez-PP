import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  public get() {
    return this.http.get("https://api.github.com/users/maxifernandez1999");
  }
}
