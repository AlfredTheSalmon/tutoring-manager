
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './shared/student/student.component';
import { ProfessorComponent } from './shared/professor/professor.component';
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { NoteListComponent } from './notes/note-list.component';
// import { NoteEditComponent } from './notes/note-edit/note-edit.component';
// import { NoteDeleteComponent } from './notes/note-delete/note-delete.component';
// import { NoteCreateComponent } from './notes/note-create/note-create.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  {
    path: 'students',
    component: MainComponent,
    children: [
      { path: '', component: StudentListComponent }
    ]
  },
  {
    path: 'student',
    component: MainComponent,
    children: [
      { path: ':id', component: StudentComponent }
    ]
  },
  {
    path: 'professors',
    component: MainComponent,
    children: [
      { path: '', component: ProfessorListComponent }
    ]
  },
  {
    path: 'professor',
    component: MainComponent,
    children: [
      { path: ':id', component: ProfessorComponent }
    ]
  },
  {
    path: 'notes',
    component: MainComponent, data: {hideFunctionPanel:'true'},
    children: [
      { path: '', component: NoteListComponent },
      // { path: ':create', component: NoteCreateComponent },
      // { path: ':id/edit', component: NoteEditComponent },
      // { path: ':id/delete', component: NoteDeleteComponent},
      { path: '**', redirectTo: '/notes', pathMatch: 'full' }
    ]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }