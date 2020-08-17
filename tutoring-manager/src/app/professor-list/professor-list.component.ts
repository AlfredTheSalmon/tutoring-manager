import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { UserStatus } from '../shared/enum/user-status.enum';
import { UserService } from '../shared/services/user-service.service';
import { UserList } from '../shared/models/user-list.model';
import { MessagesService } from '../shared/messages/messages.service';
import { UserLetterGroup } from '../shared/models/user-letter-group.model';
import { Years } from '../shared/enum/years.enum';
import { UserBase } from '../shared/models/user-base.model';
import { ProfessorListSearchQuery } from '../shared/models/professor-list-search-query.model';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css'],
})
export class ProfessorListComponent implements OnInit {

  loadingLetterList: boolean = false; //individual for each letter
  loadingProfessorList: boolean = true; //global for all letters
  errorLoading: boolean = false;
  possibleYears: string[] = [];
  possibleStatus: string[] = [];
  previousSearchQuery: ProfessorListSearchQuery; //possible use when detail is used in a modal, or in a seperate component

  year: string;
  gender: string = ''; //both genders
  status: string = UserStatus.ANY;

  openedLetter: string;

  letterList: UserList;
  professorList: UserBase[];

  constructor(private userService: UserService,
    private messageService: MessagesService) { }

  ngOnInit() {
    this.possibleYears = Object.keys(Years);
    this.possibleStatus = Object.keys(UserStatus);
    this.searchProfessors();
  }

  searchProfessors() {
    this.messageService.clear();
    let payload = this.preparePayload(this.status, null, this.gender, this.year);
    this.getProfessorList(payload);
  }

  getProfessorList(payload: ProfessorListSearchQuery, forLetter?: boolean) {
    console.log(payload);

    if (forLetter) {
      this.loadingLetterList = true;
      this.professorList = null;
    } else {
      this.loadingProfessorList = true;
      this.letterList = null;
      this.professorList = null;
    }
    this.errorLoading = false;

    if (forLetter) {
      let mockList: UserBase[] = [];
      let mock1 = new UserBase;
      mock1.id = "001";
      mock1.name = "Albert";
      mock1.teachedSubjects = "3rd, 4th, 5th";
      mock1.gender = 1;
      mock1.age = 8;

      let mock2 = new UserBase;
      mock2.id = "002";
      mock2.name = "Annie";
      mock2.teachedSubjects = "5th, 6th, 7th, 8th, 9th";
      mock2.gender = 0;
      mock2.age = 9;

      mockList = [mock1, mock2];
      this.loadingLetterList = false;
      this.professorList = mockList;

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

      this.loadingProfessorList = false;
      this.previousSearchQuery = payload;
      this.letterList = mockList;
      this.messageService.addSuccess("Found " + this.letterList.count + " professors.");
    }


    // this.userService.getProfessorList(payload).subscribe(
    //   response => {
    //     this.professorList = response;
    //     this.loadingProfessorList = false;

    //   },
    //   error => {
    //     this.loadingProfessorList = false;
    //     this.errorLoading = true;
    //     this.messageService.addError("There was an error while loading the professor list");
    //   }
    // )
  }

  clickLetter(letter: string) {
    console.log("open letter: ", letter);
    if (letter == this.openedLetter) {
      this.openedLetter = null;
    } else {
      this.openedLetter = letter;
      let payload = this.preparePayload(this.previousSearchQuery.status, letter, this.previousSearchQuery.gender, this.previousSearchQuery.teachedSubject);
      this.getProfessorList(payload, true);
    }
  }

  preparePayload(status: string, letter?: string, gender?: string, teachedSubject?: string) {
    let payload = new ProfessorListSearchQuery;
    payload.letter = letter;
    payload.gender = gender;
    payload.teachedSubject = teachedSubject;
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
