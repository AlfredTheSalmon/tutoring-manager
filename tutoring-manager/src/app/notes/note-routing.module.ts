import { Routes } from '@angular/router';
import { NotesComponent } from './notes.component';

export const noteRouting: Routes = [
    { path: '', component: NotesComponent },
    { path: '/edit/:index', loadComponent: () => import('./note-edit/note-edit.component').then(mod => mod.NoteEditComponent) },
    { path: 'delete/:index', loadComponent: () => import('./note-delete/note-delete.component').then(mod => mod.NoteDeleteComponent) },
    { path: 'create', loadComponent: () => import('./note-create/note-create.component').then(mod => mod.NoteCreateComponent) },
    // { path: ':create', component: NoteCreateComponent },
    // { path: 'edit/:index', component: NoteEditComponent },
    // { path: ':id/delete', component: NoteDeleteComponent},
    { path: '**', redirectTo: '/notes', pathMatch: 'full' }
]