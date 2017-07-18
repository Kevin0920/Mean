import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  dateTime = new Date();
  // when click on different buttons they will be starting at the same situation
  time = [false, false, false, false];

  changeTime(i){
    this.time[i] = !this.time[i];
    }
    clear() {
      this.time = [false, false, false, false];
  }
}
