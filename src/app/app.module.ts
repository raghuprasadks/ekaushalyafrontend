import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
//iport { YouTubePlayerModule } from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminbannerComponent } from './components/adminbanner/adminbanner.component';
import { CourseComponent } from './components/course/course.component';
import { MycourseComponent } from './components/mycourse/mycourse.component';
import { ContentComponent } from './components/content/content.component';
import { AddContentComponent } from './components/add-content/add-content.component';
import { CoursecontentmapComponent } from './components/coursecontentmap/coursecontentmap.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    UsersComponent,
    HomeComponent,
    BannerComponent,
    LogoutComponent,
    AdminComponent,
    AdminbannerComponent,
    CourseComponent,
    MycourseComponent,
    ContentComponent,
    AddContentComponent,
    CoursecontentmapComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    NgxYoutubePlayerModule.forRoot(),
    //YouTubePlayerModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,   
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
