import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _baseUrl = 'https://api-nodejs-todolist.herokuapp.com/';
  private _taskURL = `${this._baseUrl}task/`;


  constructor(
    private http: HttpClient,
    private _auth: AuthService
  ) { }

  getAllTasks() {
    if (this._auth.loggedIn()) {
      const headers: HttpHeaders = new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`
      });
      return this.http.get<any>(this._taskURL, { headers: headers });
    }
  }

  newTask(task) {
    if (this._auth.loggedIn()) {
      const headers: HttpHeaders = new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`
      });
      return this.http.post<any>(this._taskURL, task, { headers: headers });
    }
  }

  deleteTask(id) {
    if (this._auth.loggedIn()) {
      const headers: HttpHeaders = new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`
      });
      return this.http.post<any>(`${this._taskURL}id`, { headers: headers });
    }
  }
}
