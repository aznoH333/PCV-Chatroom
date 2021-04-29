import { Component } from '@angular/core';
import {UsersService} from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chatRoom';
  constructor(public usersService: UsersService) {}
  // prozatím nafakované
  login(): void{
    this.usersService.loggInUser('TestUser lmfao', 'xd');
  }
  logout(): void{
    this.usersService.logOutUser();
  }
  isUserLoggedIn(): boolean{
    return this.usersService.isUserLoggedIn();
  }
  bruh(): string{
    return this.usersService.getLoggedInUser().getName();
  }
}
