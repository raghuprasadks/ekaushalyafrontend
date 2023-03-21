import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

 url:string='https://ekaushalyawebapi.azurewebsites.net/api/users/'
 //url:string='https://localhost:44399/api/users/'
  constructor(private httpclient:HttpClient) { }

  signUp(user:User ):Observable<User>{
    return this.httpclient.post<User>(this.url+'Postuser',user);
  }

  login(user:User ):Observable<User>{
    return this.httpclient.post<User>(this.url+'Loginuser',user);
  }

  forgotPassword(email:string){
    return this.httpclient.post(this.url, email);

  };

  chngPassword(currentPassword:string , newPassword:string){
    const data = {currentPassword, newPassword}
    return this.httpclient.put(this.url, data);

  }

  getUser(){
    return this.httpclient.get(this.url)
  }


}
