import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../shared/messages/messages.service';
import { UserService } from '../shared/services/user-service.service';
import { ProfessorNote } from '../shared/models/professor-info.model';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent implements OnInit{

  public notesList: ProfessorNote[];
  
  constructor(private messagesService: MessagesService,
    private userService: UserService){
  }

  ngOnInit() {
    // this.userService.getProfessorNoteList("").subscribe(
    //   response => {
    //     this.notesList = response;
    //   }
    // )

    
  }

}
