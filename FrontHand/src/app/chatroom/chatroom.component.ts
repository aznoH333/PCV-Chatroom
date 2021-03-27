import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {

  // @ts-ignore
  chatInput : string;

  constructor() { }

  ngOnInit(): void {
  }

  messages : message[] = [
    new message("this is a test message", "different user"),
  ];



  sendMessage() {
    if (this.chatInput.length > 0){
      this.messages.push(new message(this.chatInput,"currentUser(placeholder)"));
      this.chatInput = '';
    }
  }
}

class message {


  constructor(private content : string,private sender : string){}

  getContent(){
    return this.content;
  }

  getSender(){
    return this.sender;
  }

  editMessage(editedM : string){
    this.content = editedM;
  }
}
