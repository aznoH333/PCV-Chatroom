import { Component, OnInit } from '@angular/core';
import {Message} from '../../data/message';
import {PostService} from '../services/post.service';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {

  // @ts-ignore
  chatInput: string;

  renderMessages: Message[] = [];

  constructor(private postService: PostService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.renderMessages = this.postService.updateMessages();
  }

  sendMessage(): void {
    if (this.chatInput.length > 0){
      this.postService.sendMessage(new Message(this.chatInput, this.usersService.getLoggedInUser().getName()));
      this.chatInput = '';
      this.renderMessages = this.postService.updateMessages();
    }
  }
  bruh(): boolean{
    return this.usersService.isUserLoggedIn();
  }
  loggedInUserName(): string{
    return this.usersService.getLoggedInUser().getName();
  }
}


