import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable, from, pipe } from 'rxjs';
import { Category } from '../models/category';
import { map } from 'rxjs/operators';

import { Plugins } from '@capacitor/core';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';
const { Storage } = Plugins;

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryCollection: AngularFirestoreCollection<Category>;
  //category: Observable<Category>;
  categories: Observable<any>;

  constructor(private afs: AngularFirestore) {
    let collection = this.afs.collection<Category>("categories");
    let categoryArray = [];
    this.categories = collection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Category;
        const id = a.payload.doc.id;
        return { id, ...data };
    })))
  }


  getCategories(parentCode?:string){
    /*
    this.categories.subscribe((data: Category)=>{
      console.log(_.filter(data, o=>{return o.parents.length==0}))
    })
    */
   if(parentCode){
    return this.categories.pipe(
      map(actions => {return _.filter(actions, o=>{return o.parents.includes(parentCode)})})
        
    )
   }else{
    return this.categories.pipe(
      map(actions => {return _.filter(actions, o=>{return o.parents.length==0})})
        
    )
   }
    
    /*
    .subscribe((data: Category)=>{
      console.log(_.filter(data, o=>{return o.parents.length==0}))
    })
    */

/*
    if(parentCode){
      this.categoryCollection = this.afs.collection<Category>("categories", ref=>ref.where("parents", "array-contains", parentCode));
    }else{
      this.categoryCollection = this.afs.collection<Category>('categories', ref=>ref.where("parents", "==", []));
    }
    //return this.categoryCollection.valueChanges({ idField: 'id'});

    return this.categoryCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Category;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
    */
  }
}