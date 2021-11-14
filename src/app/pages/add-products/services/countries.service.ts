import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  public getCountriesByContinent(continent: string): Observable<any> {
    return this.http.get<any>(`https://restcountries.com/v3.1/region/${continent}`)
  }
}
