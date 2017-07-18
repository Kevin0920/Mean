import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  // set 10 buttons to be the same situation as On 'green', then turn the function off to red
  switchs = [true, true, true, true, false, true, true, true, false, true];
  // switch index not equal to each other
  switchOff(i){
    console.log(i, "switchOff");
    this.switchs[i] = !this.switchs[i];
  }
}
