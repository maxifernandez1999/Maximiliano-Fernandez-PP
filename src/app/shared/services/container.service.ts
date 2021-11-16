import { Injectable } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
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
  public updateContainer(container: Container, idContainer:string): Promise<any> {
    return this.containerRef.doc(idContainer).update({ ...container });
  }
  public getContainer(): Observable<any> {
    return this.containerRef.get();
  }
}
