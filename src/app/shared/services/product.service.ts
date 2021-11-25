import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsRef: AngularFirestoreCollection;
  constructor(private firestore: AngularFirestore) {
    this.productsRef = firestore.collection('products');;
  }
  public addProduct(product:Product):Promise<any>{
    return this.productsRef.add({...product});
  }
  public getProducts():Observable<Product[]>{
    return this.productsRef.valueChanges() as Observable<Product[]>;
  }
  public getProductWithID(): Observable<any> {
    return this.productsRef.get();
  }
  public updateProduct(idProduct:string, newStock:string): Promise<any> {
    return this.productsRef.doc(idProduct).update({
      stock: newStock
    });
  }
}
