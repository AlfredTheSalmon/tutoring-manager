import { Component, OnInit, Input } from '@angular/core';
import { ComponentMode } from '../enum/component-mode.enum';
import { MessagesService } from '../messages/messages.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(
    private messageService: MessagesService
  ) { }

  @Input() mode = ComponentMode;

  ngOnInit() {
    this.messageService.addError("test message");
    if (this.mode == null) {
      this.messageService.addError("test message");
    }
  }

}
