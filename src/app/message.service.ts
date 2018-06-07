import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages :string[] = [];
  messageStream = new Subject<string>();
  addMessage(message:string) {
    this.messages.push(message);
    this.messageStream.next(message);
  }
  getMessages():string[] {
    return this.messages;
  }
  getMessageStream():Subject<String> {
    return this.messageStream;
  }
  public clearMessages() {
    this.messages = [];
  }

}
