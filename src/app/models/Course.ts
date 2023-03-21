export interface Course {
  id: number,
  name: string,
  description: string,
  videourl: string,
  isPaid: string,
  isActive: string,
  CreationDate: Date,
  price: number,
  type: string,
  mycourses: any[],
}

export interface Contents {
  id: number;
  topic: string;
  description: string;
  videourl: string;
  displayOrder:number

}

export interface CourseContent {
  courseid: number;
  contentid: number;
  id?: number
}
