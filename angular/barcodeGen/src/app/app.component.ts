import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  imageArr = [];
  // constructor below, show 10 boxes having a for loop, and looping each one
  showAll () {
    for(let i = 0; i < 10; i++) {
      const randomNum = (Math.floor(Math.random() * 6)) + 1;
      if(randomNum === 1) {
        this.imageArr.push('DarkSeaGreen');
      }
      else if(randomNum === 2) {
        this.imageArr.push('MediumAquaMarine');
      }
      else if(randomNum === 3) {
        this.imageArr.push('Fuchsia');
      }
      else if(randomNum === 4) {
        this.imageArr.push('BlanchedAlmond');
      }
      else if(randomNum === 5) {
        this.imageArr.push('BlueViolet');
      }
      else if(randomNum === 6) {
        this.imageArr.push('Chartreuse');
      }
      else if(randomNum === 7) {
        this.imageArr.push('Chocolate');
      }
    }
  }
  ngOnInit() {
    this.showAll();
  }
}
