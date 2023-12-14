import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { StudentInfo } from '../models/student-info.model';
import { ProfessorNote } from '../models/professor-info.model';

@Injectable({
  providedIn: 'root'
})
export class SidePanelsPubSub {

  private studentInfoSubscriber: Subject<StudentInfo> = new Subject<StudentInfo>();
  private professorNotesSubscriber: Subject<ProfessorNote[]> = new Subject<ProfessorNote[]>();

  get studentInfoSubscriber$() {
    return this.studentInfoSubscriber.asObservable();
  }

  updateStudentInfo(data: StudentInfo) {
    this.studentInfoSubscriber.next(data);
  }

  /* -------------------------------------------------------------------------------- */

  get professorNotesSubscriber$() {
    return this.professorNotesSubscriber.asObservable();
  }
  
  syncProfessorNotes(info: ProfessorNote[]) {
    this.professorNotesSubscriber.next(info);
  }

}