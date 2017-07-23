import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products = [{
    title: 'Basketball Game',
    price: 10000,
    url: 'http://www.animenewsnetwork.com/thumbnails/crop900x350/video/category/117/slam_dunk.jpg'
  }
];

  constructor(private _productService: ProductService) {
     this._productService.subject.next(this.products); // calling products above
  }

}
