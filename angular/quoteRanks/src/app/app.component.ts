
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  quotes = [];
  addNewQuote(data){
    this.quotes.push(data);

  }
  removeQuote(i){
    console.log(i);
    this.quotes.splice(i, 1);
    console.log(this.quotes);
  }
}
