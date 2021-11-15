import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  private communicator = new BehaviorSubject<Product>(new Product);
  public communicator$ = this.communicator.asObservable();
  constructor() { }

  public setData(product:Product){
    this.communicator.next(product);
  }

}
