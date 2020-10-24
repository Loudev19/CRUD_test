import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    "email": '',
    "password": ''
  };

  errorMessage = '';

  constructor(
    public _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this._auth.getUserId()
            .subscribe(
              res => {
                console.log(res);
                this._router.navigate(['/tasks']);
              },
              err => this.errorMessage = err.error.errorMessage
            );
        },
        err => {
          this.errorMessage = err.error.errorMessage;
          console.log(err);
        }
      )
  }

}
