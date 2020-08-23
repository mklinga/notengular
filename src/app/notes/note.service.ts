import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  getAllNoteIds(): Observable<Array<string>> {
    return of(['abc']).pipe(delay(1000));
  }

  fetchNote(noteId: string): Observable<string> {
    return of(`note ${noteId}`).pipe(delay(500));
  }
}
