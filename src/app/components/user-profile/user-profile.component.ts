import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  profileForm!: FormGroup;
  profileData: any;
  readonly: boolean = true;

  constructor(private http: HttpClient, private fb: FormBuilder) { }
  
  ngOnInit() {
    // Create the form
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: [{value: '', disabled: true}, [Validators.required, Validators.email]],
      mobile: ['', Validators.required]
    });

    // Fetch the user profile data from the backend
    this.http.get('/api/user/profile').subscribe(data => {
      this.profileData = data;
      this.profileForm.setValue({
        name: this.profileData.name,
        email: this.profileData.email,
        mobile: this.profileData.mobile
      });
    });
  }

  updateProfile() {
    if (this.readonly) {
      // Enable all fields for editing except for email
   //   this.profileForm.get('name').enable();
     // this.profileForm.get('mobile').enable();
      this.readonly = false;
    } else {
      // Disable all fields for editing except for email
     // this.profileForm.get('name').disable();
     // this.profileForm.get('mobile').disable();
      this.readonly = true;

      // Update the user profile data on the backend
      this.http.put('/api/user/profile', this.profileForm.value).subscribe(() => {
        // TODO: Handle success
      });
    }
  }

}
