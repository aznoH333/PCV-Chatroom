import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChatroomComponent} from "./chatroom/chatroom.component";
import {UserComponent} from "./user/user.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {path:'chat',component:ChatroomComponent},
  {path:'user',component:UserComponent},
  {path:'',component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
