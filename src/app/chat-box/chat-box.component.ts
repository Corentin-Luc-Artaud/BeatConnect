import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {

  public messages: Message[];
  public connectedUserToken: string;
  public messageContent: string;
  public class: string;

  constructor() {
    this.connectedUserToken = 'OK';
    this.class = 'none';
  }

  ngOnInit() {
    this.getMessages();
  }

  close() {
    this.class = 'none';
  }

  open() {
    this.class = 'block';
  }

  sendMessage() {
    this.messages.push({message : this.messageContent, time: Date.now(), who: 'User'});
    this.messageContent = '';
  }

  getMessages() {
    this.messages = [{
      message : 'Salut l\'intru',
      time : Date.now(),
      who : 'Bot'
    }, {
      message : 'Ok',
      time : Date.now(),
      who : 'User'
    }, ];
  }

}
