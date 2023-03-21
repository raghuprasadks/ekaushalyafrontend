import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContentComponent } from './components/add-content/add-content.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ContentComponent } from './components/content/content.component';
import { CourseComponent } from './components/course/course.component';
import { CoursecontentmapComponent } from './components/coursecontentmap/coursecontentmap.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MycourseComponent } from './components/mycourse/mycourse.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'user',component:UsersComponent},
  {path:'logout',component:LogoutComponent},
  {path:'mycourses', component:MycourseComponent},
  {path:'courses/:id', component:ContentComponent},
  {path:'addCourse', component:CourseComponent},
  {path:'addContent',component:AddContentComponent},
  {path:'mapping', component:CoursecontentmapComponent},
  {path:'frgtPassword', component:ForgotPasswordComponent},
  {path:'chngPassword', component:ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
