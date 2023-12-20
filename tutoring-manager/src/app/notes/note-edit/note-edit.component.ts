import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { ProfessorNote } from 'src/app/shared/models/professor-info.model';
import { UserService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-note-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-edit.component.html',
  styleUrl: './note-edit.component.css'
})
export class NoteEditComponent implements OnInit{

  note$!: Observable<ProfessorNote | undefined>;

  constructor(private userService: UserService, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.paramMap.pipe(map(params => {
      return this.userService.getProfessorNoteDetailMock(this.userService.getProfessorId(), Number[params.get('index')]);
    })).subscribe (
      response => {
        this.note$ = response;
      }
    )
  }

}
