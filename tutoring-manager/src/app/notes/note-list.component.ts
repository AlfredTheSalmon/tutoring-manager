import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../shared/messages/messages.service';
import { UserService } from '../shared/services/user-service.service';
import { ProfessorNote } from '../shared/models/professor-info.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent implements OnInit {

  notesList: ProfessorNote[];
  
  constructor(private messagesService: MessagesService,
    private userService: UserService,
    private router: Router){
  }

  ngOnInit() {

    this.notesList = this.userService.getProfessorNoteListMock();

    this.messagesService.addSuccess("Found " + this.notesList.length + " notes.");

    // this.userService.getProfessorNoteList("").subscribe(
    //   response => {
    //     this.notesList = response;
    //   }
    // )
  }

  editMessage(index: number) {
    this.router.navigate(["/notes", index, "/edit"]);
  }

  deleteMessage(index: number) {
    this.router.navigate(["/notes", index, "/delete"]);
  }

  newNote() {
    this.router.navigate(["/notes/create"]);
  }
}
