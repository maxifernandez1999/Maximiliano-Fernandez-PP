import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Container } from '../models/container';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  public containers: Container[] = []
  private containerRef: AngularFirestoreCollection;
  constructor(private firestore: AngularFirestore) {
    this.containerRef = firestore.collection('container');;
  }
  public addContainer(container: Container): Promise<any> {
    return this.containerRef.add({ ...container });
  }
  // public getContainer(): Observable<Container[]> {
  //   return this.containerRef.valueChanges() as Observable<Container[]>;
  // }
  public updateContainerWithStock(idContainer:string, newlot:string, newstock:any[]): Promise<any> {
    return this.containerRef.doc(idContainer).update({ 
      lot: newlot,
      stock: newstock
    });
  }
  public updateContainer(idContainer:string, newlot:string, newmark:string): Promise<any> {
    return this.containerRef.doc(idContainer).update({ 
      mark: newmark,
      lot: newlot
    });
  }
  public deleteContainer(idContainer:string): Promise<any> {
    return this.containerRef.doc(idContainer).delete();
  }
  public getContainer(): Observable<any> {
    return this.containerRef.get();
  }
}
