import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent {

  @Input() notes: string[];

  @Output() selectNote = new EventEmitter<string>();

  constructor() { }
}
