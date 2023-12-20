import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './student-list/student-list.component';
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { NotesComponent } from './notes/notes.component';
import { NoteListComponent } from './notes/note-list/note-list.component';
import { NoteCreateComponent } from './notes/note-create/note-create.component';
import { NoteDeleteComponent } from './notes/note-delete/note-delete.component';
import { NoteEditComponent } from './notes/note-edit/note-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    StudentListComponent,
    ProfessorListComponent,
    NotesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule,

    // Standalone Components
    NoteListComponent,
    NoteCreateComponent,
    NoteDeleteComponent,
    NoteEditComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
