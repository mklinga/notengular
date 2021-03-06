import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewerComponent } from './viewer/viewer.component';
import { NoteListComponent } from './viewer/note-list/note-list.component';
import { ViewModeToolbarComponent } from './viewer/view-mode-toolbar/view-mode-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewerComponent,
    NoteListComponent,
    ViewModeToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
