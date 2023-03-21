import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  constructor(private userService: UserService) { }

  changePasswordForm = new FormGroup({
    currentPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  onSubmit() {
    const currentPassword = this.changePasswordForm.value.currentPassword;
    const newPassword = this.changePasswordForm.value.newPassword;
    const confirmNewPassword = this.changePasswordForm.value.confirmPassword;

    if (newPassword !== confirmNewPassword) {
      console.log('Passwords do not match');
      return;
    }

    this.userService.chngPassword(currentPassword!, newPassword!).subscribe(
      (res) => {
        console.log('Password Changed');
      },
      (error) => {
        console.log('Error');
      }
    );
  }
}
