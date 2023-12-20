import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, ROUTES, Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProfessorNote } from 'src/app/shared/models/professor-info.model';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, RouterModule, AppRoutingModule],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent {

  @Input() notesList: ProfessorNote[];

  constructor(private router: Router) {
  }

  editMessage(index: number) {
    console.log("click edit: ", index)
    this.router.navigate(["edit/0"]);
  }

  deleteMessage(index: number) {
    this.router.navigate(["#/notes/delete/", index]);
  }

  newNote() {
    this.router.navigate(["#/notes/create"]);
  }

}
