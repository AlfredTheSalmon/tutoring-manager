import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { StudentListSearchQuery } from '../shared/models/student-list-search-query.model';
import { UserStatus } from '../shared/enum/user-status.enum';
import { UserService } from '../shared/services/user-service.service';
import { UserList } from '../shared/models/user-list.model';
import { MessagesService } from '../shared/messages/messages.service';
import { UserLetterGroup } from '../shared/models/user-letter-group.model';
import { Years } from '../shared/enum/years.enum';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {

  loadingStudentList: boolean = true;
  errorLoading: boolean = false;
  possibleYears: string[] = [];
  possibleStatus: string[] = [];

  year: string;
  gender: string = ''; //both genders
  status: string = UserStatus.ANY;

  studentList: UserList;

  constructor(private userService: UserService,
    private messageService: MessagesService) { }

  ngOnInit() {
    this.possibleYears = Object.keys(Years);
    this.possibleStatus = Object.keys(UserStatus);
    this.getStudentList(UserStatus.ACTIVE);
  }

  searchStudents() {
    this.messageService.clear();
    this.getStudentList(this.status, null, this.gender, this.year);
  }

  getStudentList(status: string, letter?: string, gender?: string, yearOfSchool?: string) {
    let payload = this.preparePayload(status, letter, gender, yearOfSchool);
    console.log(payload);

    this.loadingStudentList = true;
    this.errorLoading = false;
    this.studentList = null;

    let mockList = new UserList;
    mockList.count = 3;
    let letterA = new UserLetterGroup;
    letterA.letter = 'A';
    letterA.count = 1;
    let letterB = new UserLetterGroup;
    letterB.letter = 'B';
    letterB.count = 2;
    mockList.result = [letterA, letterB];

    this.loadingStudentList = false;
    this.studentList = mockList;
    this.messageService.addSuccess("Found " + this.studentList.count + " students.");

    // this.userService.getStudentList(payload).subscribe(
    //   response => {
    //     this.studentList = response;
    //     this.loadingStudentList = false;

    //   },
    //   error => {
    //     this.loadingStudentList = false;
    //     this.errorLoading = true;
    //     this.messageService.addError("There was an error while loading the student list");
    //   }
    // )
  }

  preparePayload(status: string, letter?: string, gender?: string, yearOfSchool?: string) {
    let payload = new StudentListSearchQuery;
    payload.letter = letter;
    payload.gender = gender;
    payload.yearOfSchool = yearOfSchool;
    payload.status = status;
    return payload;
  }

  updateYear(yearKey: string) {
    this.year = yearKey;
  }

  updateStatus(statusKey: string) {
    this.status = statusKey;
  }

  updateGender(genderKey: string) {
    this.gender = genderKey;
  }

}
