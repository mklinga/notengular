import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  getAllNoteIds(): Array<string> {
    return ['abc'];
  }

  getNote(noteId: string): string {
    return `note ${noteId}`;
  }
}
