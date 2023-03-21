import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  courseForm!: FormGroup;

  constructor(private courseService: CourseService, private fb: FormBuilder) { }

  ngOnInit() {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      videourl: ['', Validators.required],
      isPaid: ['no', Validators.required],
      isActive: ['true', Validators.required],
      price: ['', Validators.required],
      type: ['', Validators.required]
    });

    this.courseForm.patchValue({
      isPaid: false,
      isActive: true
    });
  }

  onSubmit() {
    const courseData: Course = this.courseForm.value;
    console.log('FormValue',courseData)
    // courseData.CreationDate = new Date() // set CreationDate to current date
    this.courseService.addCourse(courseData)
      .subscribe(
        response => {
          console.log(response);
          alert('Course created successfully')
          // Do something with the response
          console.log('FormValue',courseData)
        },
        error => {
          console.log(error);
          alert('Course creation failed');
          // Handle the error
        }
      );
    this.courseForm.reset();
  }
}
