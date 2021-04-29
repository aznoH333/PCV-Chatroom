import { Injectable } from '@angular/core';
import {User} from '../../data/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // @ts-ignore
  loggedInUser: User;

  constructor() { }

  public isUserLoggedIn(): boolean{
    return this.loggedInUser == null;
  }

  public getLoggedInUser(): User{
    return this.loggedInUser;
  }

  public loggInUser(name: string, password: string): boolean{
    // nafakovany
    this.loggedInUser = new User(name, 3);
    console.log(name);
    console.log(password);
    return false;
  }
  // proč tady nemůžu mít mezeru co to je za hovno
  // fuj
  public logOutUser(): void{
    console.log('user logged out');
    // @ts-ignore
    this.loggedInUser = null;
  }
}
