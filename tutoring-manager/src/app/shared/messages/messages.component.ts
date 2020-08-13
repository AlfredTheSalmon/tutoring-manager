import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessagesService } from './messages.service';
import { Router, ResolveEnd } from '@angular/router';
import { Message } from './message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessagesService, private router: Router) { }

  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.router.events.subscribe((ev) => {
      if (ev instanceof ResolveEnd) {
        // console.log('ev as expected', ev);
        this.messageService.clear();
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  getMessages(): Message[] {
    return this.messageService.messages;
  }

  removeMessage(i: number) {
    this.messageService.removeMessage(i);
  }

}
