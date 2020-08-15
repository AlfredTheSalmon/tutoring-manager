import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { StudentListSearchQuery } from '../shared/models/student-list-search-query.model';
import { UserStatus } from '../shared/enum/user-status.enum';
import { UserService } from '../shared/services/user-service.service';
import { UserList } from '../shared/models/user-list.model';
import { MessagesService } from '../shared/messages/messages.service';
import { UserLetterGroup } from '../shared/models/user-letter-group.model';
import { Years } from '../shared/enum/years.enum';
import { UserBase } from '../shared/models/user-base.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {

  loadingLetterList: boolean = false; //individual for each letter
  loadingStudentList: boolean = true; //global for all letters
  errorLoading: boolean = false;
  possibleYears: string[] = [];
  possibleStatus: string[] = [];
  previousSearchQuery: StudentListSearchQuery;

  year: string;
  gender: string = ''; //both genders
  status: string = UserStatus.ANY;

  openedLetter: string;

  letterList: UserList;
  studentList: UserBase[];

  constructor(private userService: UserService,
    private messageService: MessagesService) { }

  ngOnInit() {
    this.possibleYears = Object.keys(Years);
    this.possibleStatus = Object.keys(UserStatus);
    this.searchStudents();
  }

  searchStudents() {
    this.messageService.clear();
    let payload = this.preparePayload(this.status, null, this.gender, this.year);
    this.getStudentList(payload);
  }

  getStudentList(payload: StudentListSearchQuery, forLetter?: boolean) {
    console.log(payload);

    if (forLetter) {
      this.loadingLetterList = true;
      this.studentList = null;
    } else {
      this.loadingStudentList = true;
      this.letterList = null;
      this.studentList = null;
    }
    this.errorLoading = false;

    if (forLetter) {
      let mockList: UserBase[] = [];
      let mock1 = new UserBase;
      mock1.id = "001";
      mock1.name = "Albert";
      mock1.yearOfSchool = "4th";
      mock1.gender = 1;
      mock1.age = 8;

      let mock2 = new UserBase;
      mock2.id = "002";
      mock2.name = "Annie";
      mock2.yearOfSchool = "5th";
      mock2.gender = 0;
      mock2.age = 9;

      mockList = [mock1, mock2];
      this.loadingLetterList = false;
      this.studentList = mockList;

    } else {
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
      this.previousSearchQuery = payload;
      this.letterList = mockList;
      this.messageService.addSuccess("Found " + this.letterList.count + " students.");
    }


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

  clickLetter(letter: string) {
    console.log("open letter: ", letter);
    if (letter == this.openedLetter) {
      this.openedLetter = null;
    } else {
      this.openedLetter = letter;
      let payload = this.preparePayload(this.previousSearchQuery.status, letter, this.previousSearchQuery.gender, this.previousSearchQuery.yearOfSchool);
      this.getStudentList(payload, true);
    }
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
