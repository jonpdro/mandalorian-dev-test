import { Task } from './../../../model/Task';
import { TaskService } from './../../../controller/task.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {

  tarefa: Task = {
    key: "",
    value: ""
  }

  constructor(
    private service: TaskService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  createTask() {
    return this.service.post(this.tarefa).subscribe(() => {
      this.route.navigate(['/task'])
    })
  }

  cancel() {
    return this.route.navigate(['/task'])
  }

}
