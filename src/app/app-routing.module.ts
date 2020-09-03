import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewerComponent } from './viewer/viewer.component';

const routes: Routes = [
  { path: 'notes', component: ViewerComponent },
  { path: 'notes/:noteId', component: ViewerComponent },
  { path: '', redirectTo: '/notes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
