import { Component, OnInit, Input } from '@angular/core';
import { ComponentMode } from '../enum/component-mode.enum';
import { MessagesService } from '../messages/messages.service';
import { StudentInfo } from './student-info.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user-service.service';
import { UserStatus } from '../enum/user-status.enum';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(
    private messageService: MessagesService,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  @Input() mode: ComponentMode;
  @Input() info: StudentInfo;

  error: boolean = false;
  studentId: string;
  loadingInfo: boolean = true;

  ngOnInit() {
    if (this.mode == null) {
      this.messageService.addError("Error: No Student mode selected.");
      return;
    }

    if (this.mode == ComponentMode.EMBEDDED && this.info == null) {
      this.messageService.addError("Error: No Student info available.");
      return;
    }

    if (this.mode == ComponentMode.SOLO) {
      this.studentId = this.route.snapshot.paramMap.get('id');
      this.getStudentInfo(this.studentId);
    }
  }

  getStudentInfo(studentId: string) {
    let studentInfo = new StudentInfo;
    studentInfo.id = "123";
    studentInfo.age = 12;
    studentInfo.name = "Miguel";
    studentInfo.fullName = "Miguel Rodrigues de Carvalho";
    studentInfo.gender = 1;
    studentInfo.parent1 = "Mário";
    studentInfo.parent1gender = 1;
    studentInfo.parent2 = "Maria";
    studentInfo.parent2gender = 0;
    studentInfo.parentEmail = "whatever@gmail.com";
    studentInfo.email = "nothing@gmail.com";
    studentInfo.parentPhone = 123456789;
    studentInfo.status = UserStatus.ACTIVE;
    studentInfo.address = "address 1";

    let note1 = "note 1";
    let note2 = "note 2";
    let note3 = "note 3";

    studentInfo.notes = [note1, note2, note3];

    this.info = studentInfo;
    this.loadingInfo = false;
    // this.userService.getStudent(studentId).subscribe(
    //   response => {
    //     this.info = response;
    //     this.comunicateInfo(this.info);
    //   },
    //   error => {
    //     this.error = true;
    //   }
    // )
  }

  comunicateInfo(info: StudentInfo) {

  }

}
