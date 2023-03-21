import { AfterContentInit, Component, OnChanges, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit,AfterContentInit,OnChanges  {
 
  isLoggedIn:boolean=false;
  user:any;

  constructor(){
    console.log("banner:constructor")
  }

  ngOnInit(): void {
    console.log("banner:ngOnInit")
     let usr:any = localStorage.getItem("loggedinuser");
   //  console.log("usr length"+usr.length)
     
  // console.log("user::after login::",this.user)
   if(usr!=null && usr.length>0){
    this.isLoggedIn=true
    this.user=JSON.parse(usr)
   }
    else{
    this.isLoggedIn=false
    this.user=''
    }
  }

  ngAfterContentInit (){
    console.log("after content init::")

  }
 
  ngOnChanges (){
    console.log("after ngOnChanges::")

  }

}
