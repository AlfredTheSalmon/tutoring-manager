import { Component, OnInit, Input } from '@angular/core';
import { UserBase } from '../models/user-base.model';

@Component({
  selector: 'app-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.css']
})
export class LetterListComponent implements OnInit {

  @Input() content: UserBase[];
  @Input() studentList: boolean; //student = true, teacher = false

  constructor() { }

  ngOnInit() {
  }

  openDetail(id: string) {
    console.log("chose item to open: ", id);
  }

}
