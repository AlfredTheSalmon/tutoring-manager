import { Component, OnInit } from '@angular/core';
import { ComponentMode } from '../shared/enum/component-mode.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  get componentMode() { return ComponentMode; }

  constructor() { }

  ngOnInit() {
    this.getDailyLessons();
  }

  getDailyLessons() {

  }
}
