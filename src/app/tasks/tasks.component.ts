import { Component, OnInit } from '@angular/core';
import { TaskService } from "../task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  data: any = [];

  createTaskData = {
    "description": '',
  };

  constructor(private tasks: TaskService) {
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

  ngOnInit(): void {
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

}
