import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from '../messages/messages.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user-service.service';
import { ComponentMode } from '../enum/component-mode.enum';
import { ProfessorInfo, ProfessorNote } from '../models/professor-info.model';
import { UserStatus } from '../enum/user-status.enum';
import { SidePanelsPubSub } from '../pub-sub/side-panels-pub-sub.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  constructor(
    private messageService: MessagesService,
    private sidePanelsPubSub: SidePanelsPubSub,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  @Input() mode: ComponentMode = ComponentMode.SOLO;
  @Input() info: ProfessorInfo;

  error: boolean = false;
  professorId: string;
  loadingInfo: boolean = true;

  ngOnInit() {
    if (this.mode == null) {
      this.messageService.addError("Error: No Professor mode selected.");
      return;
    }

    if (this.mode == ComponentMode.EMBEDDED && this.info == null) {
      this.messageService.addError("Error: No Professor info available.");
      return;
    }

    if (this.mode == ComponentMode.SOLO) {
      this.professorId = this.route.snapshot.paramMap.get('id');
      console.log("got id: ", this.professorId);
      this.getProfessorInfo(this.professorId);
    }
  }

  getProfessorInfo(professorId: string) {
    let professorInfo = new ProfessorInfo;
    professorInfo.id = "123";
    professorInfo.age = 12;
    professorInfo.name = "Manuel";
    professorInfo.fullName = "Manuel Rodrigues de Carvalho";
    professorInfo.gender = 1;
    professorInfo.teachedSubjects = "9th";
    professorInfo.lastLesson = "30 February 2020";
    professorInfo.joinedTs = "1 January 2020";
    professorInfo.email = "nothing@gmail.com";
    professorInfo.status = UserStatus.ACTIVE;
    professorInfo.address = "address 1";
    professorInfo.phone = 123456789;
    professorInfo.iban = "PT50123456789123456789";

    this.info = professorInfo;
    this.loadingInfo = false;
    // this.userService.getProfessor(professorId).subscribe(
    //   response => {
    //     this.info = response;
    //     this.comunicateInfo(this.info);
    //   },
    //   error => {
    //     this.error = true;
    //   }
    // )

    let professorNotes: ProfessorNote[] = undefined;

    let note1 = new ProfessorNote;
    note1.noteTitle = "Dário's mom number";
    note1.noteBody = "+351 123456789";
    
    let note2 = new ProfessorNote;
    note2.noteTitle = "Bring for Mathilda's next lesson";
    note2.noteBody = "Math book XYZ from 8º grade.";
    
    let note3 = new ProfessorNote;
    note3.noteTitle = "Reschedule";
    note3.noteBody = "Ask for a reschedule of the lessons 2 weeks from now on day 18.";

    professorNotes = [note1, note2, note3];
    // this.userService.getProfessorNoteList(professorId).subscribe(
    //   response => {
    //       professorNotes = response;
    //       this.syncProfessorNotes(professorNotes);
    //     },
    //     error => {
    //       this.error = true;
    //     }
    // )

    this.syncProfessorNotes(professorNotes);
  }

  comunicateInfo(info: ProfessorInfo) {

  }

  syncProfessorNotes(info: ProfessorNote[]) {
    this.sidePanelsPubSub.syncProfessorNotes(info);
  }

  ngOnDestroy() {
    this.messageService.clear();
  }

}
