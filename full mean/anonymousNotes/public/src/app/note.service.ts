import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NoteService {
  notes = [];
  subject = new BehaviorSubject(this.notes);
  constructor(private _http: Http) { }

  createNote(note){
    return this._http.post('/create', note).map((data) => data.json()).toPromise();
  }
  showNotes(){
      var promise =  this._http.get('/show').map(data=>data.json()).toPromise();
      promise.then((data)=> {
        this.notes = data;
      })
      return promise;
    }
}
