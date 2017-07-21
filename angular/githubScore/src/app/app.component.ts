import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  // trying to find the github user name below
  username = null;
  score = null;

  constructor(private _httpService: HttpService) {}

  getUsers(){
    this._httpService.retrieveGithub(this.username)
    .then(user => {
      this.score = user.public_repos + user.followers;
        console.log(user);
    })
    .catch(err => {console.log(err); })
  }
}
