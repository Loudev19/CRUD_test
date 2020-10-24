import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  errorMessage = "";
  serverData: any;

  constructor(public _auth: AuthService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this._auth.getUserId()
      .subscribe(
        res => {
          console.log(res);
          this.serverData = res;
        },
        //err => this.errorMessage = err.error.errorMessage
      );
  }

}
