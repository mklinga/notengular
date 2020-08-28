import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../notes/note.service';
import { Note } from '../models/Note';
import { first } from 'rxjs/operators';
import { head } from '../utils/fn';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  loadingNode: boolean;
  allNotes: Note[];
  selectedNoteId: string;
  selectedNote: Note;

  constructor(private route: ActivatedRoute, private router: Router, private noteService: NoteService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.noteService.getAllNotes().subscribe(notes => {
        this.allNotes = notes;

        this.selectedNoteId = params.noteId || head(notes).id;

        this.loadingNode = true;
        this.noteService.fetchNote(this.selectedNoteId).pipe(first()).subscribe(note => {
          this.selectedNote = note;
          this.loadingNode = false;
        });
      });
    });
  }

  onSelectNote(nextNoteId: string): void {
    this.router.navigate(['/notes', { noteId: nextNoteId }]);
  }
}
