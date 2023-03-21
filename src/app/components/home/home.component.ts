import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';
import {CourseService} from '../../services/course.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit{
  isLoading = false;
  apiloaded = false;
  user: any;
  content: any;
  videoId = '';
  playerConfig = {
    controls: 0,
    mute: 1,
    autoplay: 1
  }

  player: any;
  afterViewInit: any;
 
  courses:Course[]=[];
 
  constructor(private courseService:CourseService) {
 
  }
  ngOnInit(): void {

    if (!this.apiloaded) {
      const tag = document.createElement('script');
      // tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiloaded = true;
    }
    //throw new Error('Method not implemented.');
    this.courseService.getCourses().subscribe((data)=>{
      this.courses=data
    })
  }
    //Autoplay
    onReady(e: any):void {
      // this.player.mute();
      //this.player.playVideo(e,'its ready');
    }
  
    //Loop
  
    onStateChange(event: any) {
      if (event.data === 0) {
        this.player.playVideo(event)
      }
    }
  

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.afterViewInit =true
  }

}
