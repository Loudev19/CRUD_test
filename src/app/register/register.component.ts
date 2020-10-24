import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

export interface UserInterface {
  Names: String;
  Age: number;
  Email: String;
  Password: String;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    "name": '',
    "email": '',
    "password": '',
    "age": '',
  };

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  registerUser() {
    console.log(this.registerUserData);
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
  }
}
