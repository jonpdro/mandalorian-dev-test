import { HeaderService } from './../../../model/header.service';
import { Task } from './../../../model/Task';
import { TaskService } from './../../../controller/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  tarefas: Task[]

  constructor(
    private service: TaskService,
    private headerService: HeaderService
    ) {
        headerService.headerData = {
          title: 'Home - Tabela de Tarefas',
          routeUrl: '/task'
        }
     }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.service.getAll().subscribe(task => {
      this.tarefas = task
    })
  }

}
