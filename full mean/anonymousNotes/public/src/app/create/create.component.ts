import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  note = {
    note: null
  };
  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submitting from the create component', this.note);
    this._noteService.createNote(this.note)
    .then((data) => {
      console.log('note is created', data);
      this.note = data.note;
    })
    .catch((err) => {
      console.log('got an err creating a new note', err)
    })
  }

}
