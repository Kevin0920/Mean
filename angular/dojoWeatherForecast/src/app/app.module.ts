import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WeatherApiService } from './weather-api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './/dallas/dallas.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanjoseComponent,
    BurbankComponent,
    DallasComponent,
    WashingtonComponent,
    ChicagoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // routing rule
    FormsModule,
    HttpModule

  ],
  providers: [WeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
