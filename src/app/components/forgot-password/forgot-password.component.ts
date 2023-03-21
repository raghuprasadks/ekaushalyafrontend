import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {


  constructor(private userService: UserService) { }

  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  onSubmit() {
    const email = this.forgotPasswordForm.value.email;
    if (email) {
      this.userService.forgotPassword(email).subscribe(
        () => {
          console.log('Reset password email sent');
          alert('Reset password email sent');
        },
        (error) => {
          console.log('Error sending reset password email', error);
        }
      );
      this.forgotPasswordForm.reset();
    }
  }

}
