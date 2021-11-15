import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Container } from '../models/container';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  private containerRef: AngularFirestoreCollection;
  constructor(private firestore: AngularFirestore) {
    this.containerRef = firestore.collection('container');;
  }
  public addContainer(container:Container):Promise<any>{
    return this.containerRef.add({...container});
  }
  public getContainer():Observable<Container[]>{
    return this.containerRef.valueChanges() as Observable<Container[]>;
  }
}
