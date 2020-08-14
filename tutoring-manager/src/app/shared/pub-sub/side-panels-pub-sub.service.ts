import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { StudentInfo } from '../models/student-info.model';

@Injectable({
  providedIn: 'root'
})
export class SidePanelsPubSub {

  private studentInfoSubscriber: Subject<StudentInfo> = new Subject<StudentInfo>();

  get studentInfoSubscriber$() {
    return this.studentInfoSubscriber.asObservable();
  }

  updateStudentInfo(data: StudentInfo) {
    this.studentInfoSubscriber.next(data);
  }

  /* -------------------------------------------------------------------------------- */

}