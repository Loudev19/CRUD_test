import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  updateUserData = {
    "name": '',
    "age": '',
  };

  errorMessage = "";

  constructor(public _auth: AuthService) { }

  ngOnInit(): void {
  }

  updateUser() {
    this._auth.updateUser(this.updateUserData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          this.errorMessage = err;
          console.log(err);
        }
      )
  }

}
