import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operator/map';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products/',
      ref => ref.orderByChild('title'))
      .snapshotChanges()
 .map(actions => {
      return actions.map(action => ({
        key: action.key,
        title: action.payload.val().title,
        imageUrl: action.payload.val().imageUrl,
        price: action.payload.val().price,
        category: action.payload.val().category
      }));
    });
  }

  get(productId) {
    return this.db.object('/products/' + productId).snapshotChanges();
  }

  update(productId,product) {
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId) {
    this.db.object('/products/' + productId).remove();
  }

}
