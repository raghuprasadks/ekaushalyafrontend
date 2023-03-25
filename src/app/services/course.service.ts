import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Contents, Course, CourseContent } from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  //url: string = 'https://localhost:44399/api/courses/';
  url: string = 'https://ekaushalyawebapi.azurewebsites.net/api/courses/';
  //url1: string = 'https://localhost:44399/api/courses/Postcourse'
  url1: string = 'https://ekaushalyawebapi.azurewebsites.net/api/courses/Postcourse'
 //contentUrl: string = 'https://localhost:44399/api/contents/Getcontents'
 //contentUrl: string = 'https://ekaushalyawebapi.azurewebsites.net/api/contents/Getcontents'
 contentUrl: string = 'https://ekaushalyawebapi.azurewebsites.net/api/coursecontents'
 // mycourses: string = 'https://localhost:44399/api/mycourses'
 mycourses: string = 'https://ekaushalyawebapi.azurewebsites.net/api/mycourses'
 // contUrl: string = 'https://localhost:44399/api/contents/Postcontent'
 contUrl: string = 'https://ekaushalyawebapi.azurewebsites.net/api/contents/Postcontent'
 // getcontent:string= 'https://localhost:44399/api/contents/Getcontent'
 getcontent:string= 'https://ekaushalyawebapi.azurewebsites.net/api/contents/Getcontent'
 
 //courseContentUrl:string='https://localhost:44399/api/coursecontents/Postcoursecontent'
 courseContentUrl:string='https://ekaushalyawebapi.azurewebsites.net/api/coursecontents/Postcoursecontent'
  constructor(private httpclient: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.httpclient.get<Course[]>(this.url + 'GetCourses');
  }
  addCourse(data: any): Observable<any> {
    return this.httpclient.post<any>(this.url1, data)
    // return this.httpclient.post<Course[]>(this.url + 'Postcourse');

  }

  addContent(data: any) {
    return this.httpclient.post<any>(this.contUrl , data)

  }

  getContents(): Observable<Contents[]> {
    return this.httpclient.get<Contents[]>(this.contentUrl);
  }

  
  postCourseContent(courseContent: { courseid: number, contentid: number }) {
    return this.httpclient.post<CourseContent>(`${this.courseContentUrl}`, courseContent);
  }




  /**
    signUp(user:User ):Observable<User>{
      return this.httpclient.post<User>(this.url+'Postuser',user);
    }
     */
  buyCourse(data: any): Observable<any> {
    console.log('buy :##', data)
    return this.httpclient.post<any>('https://ekaushalyawebapi.azurewebsites.net/api/mycourses/Postmycourse', data);

  }


  getMyCourses(payload: { userId: number }): Observable<Course[]> {
    return this.httpclient.get<Course[]>(`${this.mycourses}/Getmycourse/${payload.userId}`);
  }
  getContentsById(data: any): Observable<Contents[]> {
    return this.httpclient.get<Contents[]>(`${this.contentUrl}/GetCourseContents/${data}`)
  }

}
