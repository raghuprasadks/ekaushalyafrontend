import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { Contents, Course, CourseContent } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-coursecontentmap',
  templateUrl: './coursecontentmap.component.html',
  styleUrls: ['./coursecontentmap.component.css']
})
export class CoursecontentmapComponent {
  contentId!: number;
  courses: Course[] = [];
  contents: Contents[] = [];
  selectedCourse!: Course;
  //selectedContent: Content | undefined;
  selectedContent!: Contents;
//selectedContent!: Contents;

  selectedContentId!: number;


  selectedCourseName: string | undefined;
  selectedContentName: string | undefined;
  courseContentMappings: Record<number, number[]> = {};

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses: Course[]) => {
      this.courses = courses;
    });
    this.courseService.getContents().subscribe((contents: Contents[]) => {
      console.log("Contents init ::contents",contents)
      this.contents = contents;
     // this.contents.id=contents.con
    });

  }

  getContentName(content: Contents): string {
    return content?.topic ?? '';
  }

  onSave(): void {
    console.log("on save::")
    console.log("selectedCourse::",this.selectedCourse)
    console.log("selectedContent::",this.selectedContent)
    const courseContent:CourseContent={
      courseid:this.selectedCourse.id,
      contentid:this.selectedContent.id
    }
    console.log('cc:###', courseContent)

    this.courseService.postCourseContent(courseContent).subscribe(
      (courseContent: CourseContent) => {
        console.log('Post course content response:', courseContent);
      //  this.selectedCourse = undefined;
       // this.selectedContent = undefined;
      },
      (error) => {
        console.error('Post course content error:', error);
      }
    );
/**    

    if (!this.selectedCourse || !this.selectedContent) {
      return;
    }
    console.log('selectedCourse:', this.selectedCourse);
    // console.log('selectedContent:', this.selectedContent);
    console.log("Selected content:", JSON.stringify(this.selectedContent));

    const contentId = this.selectedContent;
    console.log('contentId:', contentId);

    const courseContent = {
      courseid: this.selectedCourse.id,
      contentid: this.selectedContent
    };

         const courseContent:CourseContent={
      courseid:this.selectedCourse.id,
      contentid:this.selectedContent.id
    }
    console.log('cc:###', courseContent)

    this.courseService.postCourseContent(courseContent).subscribe(
      (courseContent: CourseContent) => {
        console.log('Post course content response:', courseContent);
        this.selectedCourse = undefined;
       // this.selectedContent = undefined;
      },
      (error) => {
        console.error('Post course content error:', error);
      }
    );
    **/
  }

  view(): void {

  }

  onCourseSelected(course: Course) {
    console.log("Selected course id:", course);

    this.selectedCourse = course;
    this.selectedCourseName = course.name;

    if (!this.selectedCourse || !this.selectedCourse.id) {
      return;
    }

    const courseId = this.selectedCourse.id;
    this.courseService.getContents()
      .pipe(
        tap((contents: Contents[]) => {
          console.log("getContents response:", contents);
        }, (error) => {
          console.error("getContents error:", error);
        })
      )
      .subscribe((contents: Contents[]) => {
        this.contents = contents;
      });
  }

  onContentSelected(content: Contents) {
    console.log("Selected content :::", content);
    this.selectedContent = content;
    this.selectedContentId = content.id;

    if (!this.selectedContentId) {
      return;
    }

    
    

/**
    const contentId = this.selectedContentId;

    this.courseService.getContents()
      .subscribe((contents: Contents[]) => {
        this.contents = contents.filter((c) => c.id === contentId);
      }, (error) => {
        console.error("getContents error:", error);
      });
**/
    }





}
