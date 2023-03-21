import { AfterContentInit, Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminbanner',
  templateUrl: './adminbanner.component.html',
  styleUrls: ['./adminbanner.component.css']
})
export class AdminbannerComponent implements OnInit,OnChanges,AfterContentInit {

  isLoggedIn:boolean=false;
  user:any;

  constructor(){
    console.log("banner:constructor")
  }

  ngOnInit(): void {
    console.log("banner:ngOnInit")
     let usr:any = localStorage.getItem("loggedinuser");
     console.log("usr length"+usr.length)
     
  // console.log("user::after login::",this.user)
   if(usr.length>0){
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
