import { Injectable } from '@angular/core';
import { Observable, of, empty } from 'rxjs';
import { Note } from '../models/Note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  allNotes: Note[] = [
      { id: '1', title: 'First', content: 'First note' },
      { id: '2', title: '#2', content: 'Second note. This one has an exclamation mark!' },
      { id: '3', title: '3rdth', content: 'Third, maybe the greatest note' },
  ];

  constructor() { }

  getAllNotes(): Observable<Note[]> {
    return of(this.allNotes);
  }

  fetchNote(noteId: string): Observable<Note> {
    const note = this.allNotes.find(({ id }) => id === noteId);

    if (!note) {
      return empty();
    }
    return of(note);
  }
}
