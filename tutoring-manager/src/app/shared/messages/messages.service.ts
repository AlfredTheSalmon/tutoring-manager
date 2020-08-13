import { Injectable, OnInit } from '@angular/core';
import { Message } from './message';
import { MessageType } from '../enum/message-type.enum';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: Message[] = [];

  constructor() { }

  clear() {
    this.messages = [];
  }

  private addMsg(type: MessageType, text: string) {
    let m = new Message();
    m.type = type;
    m.text = text;
    this.messages.push(m);
  }

  addError(msg: string) {
    let safeMsg: string = (msg) ? msg : 'Ocorreu um erro. Por favor tente mais tarde.';

    this.addMsg(MessageType.ERROR, safeMsg);

    var that = this;
  }

  addSuccess(msg: string) {
    this.addMsg(MessageType.SUCCESS, msg);

    var that = this;
  }

  addWarning(msg: string) {
    this.addMsg(MessageType.WARNING, msg);

    var that = this;
  }

  removeMessage(i: number) {
    this.messages.splice(i, 1);
  }

}