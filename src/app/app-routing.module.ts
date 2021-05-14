import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChatroomComponent} from "./chatroom/chatroom.component";
import {UserComponent} from "./user/user.component";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {path:'chat',component:ChatroomComponent},
  {path:'user',component:UserComponent},
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component: LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
