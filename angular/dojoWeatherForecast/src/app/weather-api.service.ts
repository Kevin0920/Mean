import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class WeatherApiService {

  constructor(private _http: Http) { }

  retrieveWeather(city) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/find?q=${city}&units=imperial&APPID=fcfa61abb3f28568ea988e1e428c6663`).map(data=>data.json()).toPromise()
  }
}
