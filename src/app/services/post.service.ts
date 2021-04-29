import { Injectable } from '@angular/core';
import {Message} from '../../data/message';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  messages: Message[] = [
    new Message('this is a test message', 'pee pee poo poo'),
    new Message('lmfao xdd', 'spam'),
  ];

  sendMessage(message: Message): void{
    this.messages.push(message);
  }

  updateMessages(): Message[]{
    return this.messages;
    // eventuelne bude volat neco na apicku
  }
}
