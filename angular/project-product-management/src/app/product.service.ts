import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ProductService {

  subject = new BehaviorSubject(null); // observeble for

  updateProducts(products: Array<any>) {
    this.subject.next(products);
  }
}
