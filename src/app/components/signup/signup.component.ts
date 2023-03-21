import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/User';
import { HomeComponent } from '../home/home.component';
import {UserService} from '../../services/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user:User={
    name:"",
    email:"",
    mobile:-1,
    password:"",
    role:""
  }

  constructor(private userService:UserService,private router: Router){

  }

  signUp(usr:User){
    console.log("Form value ",usr)
    this.userService.signUp(usr).subscribe((data)=>{
      console.log("sign up",data)
      this.router.navigate(['login'])
    })
  }

}
