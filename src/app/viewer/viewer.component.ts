import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../notes/note.service';
import { Observable, of } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { head } from '../utils/fn';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  loading: boolean;
  noteId: Observable<string>;
  note: Observable<string>;

  constructor(private route: ActivatedRoute, private noteService: NoteService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.noteId = (params.noteId)
        ? of(params.noteId)
        : this.noteService.getAllNoteIds().pipe(map(head));

      this.note = this.noteId.pipe(
        flatMap(id => this.noteService.fetchNote(id)));
    });
  }
}
