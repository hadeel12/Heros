import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private messageService: MessageService, private cdr: ChangeDetectorRef ) {
    messageService.getMessageStream().subscribe(() => {
      cdr.detectChanges();
    });
  }
  ngOnInit() {
  }
  clearMessages() {
    this.messageService.clearMessages();
  }
  getMessages():string[] {
    return this.messageService.getMessages();
  }

}
