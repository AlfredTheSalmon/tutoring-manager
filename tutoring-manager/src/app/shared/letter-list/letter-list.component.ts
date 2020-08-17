import { Component, OnInit, Input } from '@angular/core';
import { UserBase } from '../models/user-base.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.css']
})
export class LetterListComponent implements OnInit {

  @Input() content: UserBase[];
  @Input() studentList: boolean; //student = true, teacher = false //might have diferent layouts or colors

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openDetail(id: string) {
    console.log("chose item to open: ", id);
  }

  goToDetail(id: string) {
    if (this.studentList) {
      this.router.navigate(["/student", id]);
    } else {
      this.router.navigate(["/professor", id]);
    }
  }

}
