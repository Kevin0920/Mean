import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {



  powerLevel = null;

  power = 0;
  //setting to empty
  constructor() { }

  ngOnInit() {
  }

  lalala() {
    this.power = this.powerLevel;
  }
}
