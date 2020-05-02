import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNotepadComponent } from './create-notepad/create-notepad.component';
import { NotepadDetailsComponent } from './notepad-details/notepad-details.component';
import { NotepadListComponent } from './notepad-list/notepad-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateNotepadComponent } from './update-notepad/update-notepad.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateNotepadComponent,
    NotepadDetailsComponent,
    NotepadListComponent,
    UpdateNotepadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
