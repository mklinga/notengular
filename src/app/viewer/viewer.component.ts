import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../notes/note.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  noteId: string;
  note: string;

  constructor(private route: ActivatedRoute, private noteService: NoteService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.noteId = params.noteId || this.noteService.getAllNoteIds()?.[0];
      this.note = this.noteService.getNote(this.noteId);
    });
  }

}
