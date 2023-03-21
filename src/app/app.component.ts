import { AfterContentInit, Component, OnChanges, OnInit } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,AfterContentInit{
  
  title = 'ekaushalyaui';

  isLoggedIn:boolean=false;
  user:any;
  isAdmin:boolean=false

  constructor(){
    console.log("banner:constructor")
  }

  ngOnInit(): void {
    console.log("banner:ngOnInit")
     let usr:any = localStorage.getItem("loggedinuser");
    // console.log("usr length"+usr.length)
     
  // console.log("user::after login::",this.user)
   if(usr!=null &&usr.length>0){
    this.isLoggedIn=true
    this.user=JSON.parse(usr)
    if(this.user.role=='admin')
      this.isAdmin=true;
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
