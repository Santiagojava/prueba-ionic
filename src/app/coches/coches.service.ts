import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Coche } from './coche.model';
import { map,take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CochesService {


    
  /*private coches:Coche[] = [
    {
      id:'1',
      nombre: 'Ford Mustang 2008',
      imageURL:'https://i.ytimg.com/vi/t_Le2kjjz3k/hqdefault.jpg'
    },
    {
      id:'2',
      nombre: 'Ferrari 458',
      imageURL:'https://www.pushstart.it/es/test-drive/ferrari-488-spider/images/laterale-p_hu9c00df9c4f0d43a7ab04e6e114eddd6c_171193_640x400_fill_q75_box_center.JPG'
    },
    {
      id:'3',
      nombre: 'Aston Martin DB11',
      imageURL:'https://www.diariomotor.com/imagenes/2016/03/aston-martin-db11-2016-12.jpg'
    }
  ]*/

  cocheCol: AngularFirestoreCollection<Coche>;
  cocheDoc: AngularFirestoreDocument<Coche>;
  coches: Observable<Coche[]>;
  
  constructor(private afs:AngularFirestore) { 
    this.cocheCol = this.afs.collection<Coche>('coches');
    this.coches = this.cocheCol.snapshotChanges().pipe(
      map(action=>{
        return action.map( a=>
          {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
          }
        );
      })
    )
  }

  getCoches(){
    //return [...this.coches]
    return this.coches;
  }
  getCoche(cocheId :string){
    /*return{
    ...this.coches.find(coche => {
      return coche.id === cocheId})
    }*/
    return this.cocheCol.doc<Coche>(cocheId).valueChanges();
  }

  updateCoche(coche: Coche, cocheId: string){
    return this.cocheCol.doc(cocheId).update(coche);
  }

  addCoche(coche:Coche){
    return this.cocheCol.add(coche);
    /*this.coches.push({
      id:this.coches.length + 1 + "",
      nombre,
      imageURL
    });*/
  }
  deleteCoche(cocheId:string){
    return this.cocheCol.doc(cocheId).delete();
    /*this.coches = this.coches.filter(coche => {
      return coche.id !== cocheId
    })*/
  }

}
