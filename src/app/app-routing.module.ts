import { NotepadDetailsComponent } from './notepad-details/notepad-details.component';
import { CreateNotepadComponent } from './create-notepad/create-notepad.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotepadListComponent } from './notepad-list/notepad-list.component';
import { UpdateNotepadComponent } from './update-notepad/update-notepad.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'notepads', component: NotepadListComponent },
  { path: 'add', component: CreateNotepadComponent },
  { path: 'update/:id', component: UpdateNotepadComponent },
  { path: 'details/:id', component: NotepadDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
