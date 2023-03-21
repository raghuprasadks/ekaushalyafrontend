import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:User={
    name:"",
    email:"",
    mobile:-1,
    password:"",
    role:""
  }
  constructor(private userService:UserService,private router: Router){

  }

  login(usr:User){
    console.log("Form value ",usr)
    this.userService.login(usr).subscribe((data)=>{
      console.log("login",data)
      usr=data;
      localStorage.setItem("loggedinuser",JSON.stringify(usr));
      var loggedinuser =localStorage.getItem("loggedinuser")
      console.log("loggedinuser::",loggedinuser)
      this.router.navigate(['user'])
    //  window.location.reload()
    })
  }



}
