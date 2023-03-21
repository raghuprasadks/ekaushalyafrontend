import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contents, Course } from 'src/app/models/Course';
import { User } from 'src/app/models/User';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.css']
})
export class MycourseComponent {
  contents: Contents[] = []
  selectedCourse: Course | any;
  course: Course[] = [];
  // userId: number = 1;
  user: User[] = [];



  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    let userDetails = window.localStorage.getItem('loggedinuser');
    if (userDetails) {
      let usOj = JSON.parse(userDetails);
      let userdId = { id: usOj.id }
      console.log(userdId);
      const payload = { userId: usOj.id };
      console.log('payload', payload);
      this.courseService.getMyCourses(payload).subscribe((data) => {
        this.course = data;
      });



    }else{
      console.log('Course Id');
    }


  }

  onSelectCourse(course: Course): void {
    this.selectedCourse = course;
    this.getData(course.id).subscribe((contents: Contents[]) => {
      this.contents = contents;
    });
  }


  goTOCourse(id: number) {
    console.log('courseid',id);
    this.router.navigate(['/courses', id]);
  }




  getData(courseId: number) {
    return this.courseService.getContentsById(courseId)
  }

}
