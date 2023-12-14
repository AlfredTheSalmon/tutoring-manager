import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidePanelsPubSub } from '../pub-sub/side-panels-pub-sub.service';
import { ProfessorNote } from '../models/professor-info.model';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent implements OnInit {

  public professorNotes: ProfessorNote[];

  constructor(private sidePanelsPubSub: SidePanelsPubSub ) {
    this.sidePanelsPubSub.professorNotesSubscriber$.subscribe(
      response => {
        this.professorNotes = response;
      }
    )
   }

  ngOnInit() {
  }

  editNote(index: number) {
    
  }

  removeNote(index: number) {
    
  }

}
