import { Client } from './../models/client';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) {
    this.clientCollection = afs.collection('clients');
  }

  getClients() {
    return this.clientCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Client;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  persistClient(client: Client) {
    return this.clientCollection.add(client);
  }

  retreiveOne(id: string) {
    return this.clientCollection.doc(id).valueChanges();
  }

  updateClient(client: Client) {
    return this.clientCollection.doc(client.id).update(client);
  }

}
