import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather = null;
  humidity = null;
  average = null;
  high = null;
  low = null;
  status = null;

  constructor(private _WeatherApiService: WeatherApiService) {
          this._WeatherApiService.retrieveWeather('Burbank')
              .then(data => {
                  this.weather = data.list[0].main;
                  this.humidity = this.weather.humidity;
                  this.high = Math.round(this.weather.temp_max);
                  this.low = Math.round(this.weather.temp_min);
                  this.average = Math.round((this.weather.temp_max + this.weather.temp_min) / 2);
                  this.status = data.list[0].weather[0].description
              })

            //api key: fcfa61abb3f28568ea988e1e428c6663
              .catch( err => {console.log(err)});
      }
    ngOnInit() {
    }

  }
