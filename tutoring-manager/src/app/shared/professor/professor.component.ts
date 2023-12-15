import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from '../messages/messages.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user-service.service';
import { ComponentMode } from '../enum/component-mode.enum';
import { ProfessorInfo, ProfessorNote } from '../models/professor-info.model';
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
      this.getProfessorInfo(this.professorId);
    }
  }

  getProfessorInfo(professorId: string) {
    this.info = this.userService.getProfessorMock();
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

    let professorNotes: ProfessorNote[] = this.userService.getProfessorNoteListMock();
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
    console.error("Not Implemented.");
  }

  syncProfessorNotes(info: ProfessorNote[]) {
    this.sidePanelsPubSub.syncProfessorNotes(info);
  }

  ngOnDestroy() {
    this.messageService.clear();
  }

}
