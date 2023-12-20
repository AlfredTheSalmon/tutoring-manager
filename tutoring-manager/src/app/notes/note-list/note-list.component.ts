import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProfessorNote } from 'src/app/shared/models/professor-info.model';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent {

  @Input() notesList: ProfessorNote[];

  constructor(private router: Router) {
  }

  editMessage(index: number) {
    console.log("click edit: ", index)
    this.router.navigate(["/notes/edit/", index]);
  }

  deleteMessage(index: number) {
    this.router.navigate(["#/notes/delete/", index]);
  }

  newNote() {
    this.router.navigate(["#/notes/create"]);
  }

}
