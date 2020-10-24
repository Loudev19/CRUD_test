import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _baseURL = 'https://api-nodejs-todolist.herokuapp.com/';
  private _registerUrl = `${this._baseURL}user/register`;
  private _loginUrl = `${this._baseURL}user/login`;
  private _userIdUrl = `${this._baseURL}user/me`;
  private _logoutUrl = `${this._baseURL}user/logout`;

  constructor(
    private http: HttpClient
  ) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post<any>(this._logoutUrl, { headers: headers });
  }

  getUserId() {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get(this._userIdUrl, { headers: headers });
  }

  updateUser(user) {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.put(this._userIdUrl, user, { headers: headers });
  }
}
