import { Component, NgModule, OnInit } from '@angular/core';
import { MessagesService } from '../shared/messages/messages.service';
import { UserService } from '../shared/services/user-service.service';
import { ProfessorNote } from '../shared/models/professor-info.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit {

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

  
}
