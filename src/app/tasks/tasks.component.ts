import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from "../task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  data: any = [];
  @ViewChild('closeModal') closeModal;

  index: number;

  createTaskData = {
    "description": '',
  };

  updateTaskDescription = { "description": '' };

  constructor(private tasks: TaskService) {
    this.getAllTasks();
  }

  ngOnInit(): void {
  }

  modo(value: string) {
    switch (value) {
      case "0":
        this.getAllTasks();
        break;
      case "1":
        this.getCompletedTasks();
        break;
    }
  }

  updateIt(value) {
    this.index = value;
  }

  getAllTasks() {
    this.tasks.getAllTasks().subscribe(
      taskData => {
        console.log(taskData);
        this.data = taskData;
      },
      error => {
        console.log(error);
      }
    )
  }

  getCompletedTasks() {
    this.tasks.getCompletedTasks().subscribe(
      taskData => {
        console.log(taskData);
        this.data = taskData;
      },
      error => {
        console.log(error);
      }
    )
  }

  addTask() {
    this.tasks.newTask(this.createTaskData).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    )
  }

  updateTask() {
    console.log(this.data.data[this.index]._id);
    this.tasks.updateTask(this.data.data[this.index]._id, this.updateTaskDescription).subscribe(
      res => {
        console.log(res);
        this.closeModal.nativeElement.click();
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteTask(id) {
    this.tasks.deleteTask(this.data.data[id]._id).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    )
  }

}
