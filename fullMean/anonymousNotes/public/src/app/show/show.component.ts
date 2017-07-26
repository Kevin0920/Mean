import { Component, OnInit, OnDestroy } from '@angular/core';
import { NoteService } from "../note.service";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  subscription: Subscription;
  notes = null;

  constructor(private _noteService: NoteService) {
      this.subscription = this._noteService.subject.subscribe(
          (data) => {
            console.log(data, "subscription");
            this.notes = data
          },
          (err) => {},
          () => {})
      this._noteService.showNotes()
          .then((data)=>{this.notes=data})
          .catch((err)=>{console.log(err)})
  }

  ngOnInit() {

  }

  ngOnDestroy() {
      this.subscription.unsubscribe()
  }
}
