import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent {
  contentForm!: FormGroup;

  constructor(private courseService:CourseService , private fb: FormBuilder) { }

  ngOnInit() {
    this.contentForm = this.fb.group({
      topic: ['', Validators.required],
      description: ['', Validators.required],
      videoUrl: ['', Validators.required],
      displayOrder: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  onSubmit() {
    const contentData = this.contentForm.value;
    console.log('contdata', contentData)
    this.courseService.addContent(contentData)
      .subscribe(
        response => {
          console.log(response);
          // Do something with the response
        },
        error => {
          console.log(error);
          // Handle the error
        }
      );
  }


}
