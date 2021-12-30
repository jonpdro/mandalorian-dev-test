import { HeaderService } from './../../../model/header.service';
import { SnackbarService } from './../../../model/snackbar.service';
import { Task } from './../../../model/Task';
import { TaskService } from './../../../controller/task.service';
import { Component, Input, OnInit } from '@angular/core';
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
    private route: Router,
    private alert: SnackbarService,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Criação de Tarefas',
      routeUrl: '/add/task'
    }
  }

  ngOnInit(): void {
  }

  createTask() {
    if (this.tarefa.value.length >= 10){
      return this.service.post(this.tarefa).subscribe(() => {
        this.alert.showAlert('Tarefa criada com sucesso!')
        this.route.navigate(['/task'])
      });
    } else {
      return this.alert.showAlert('Ops! O valor deve conter pelo menos 10 caracteres!')
    }
  }

  cancel() {
    return this.route.navigate(['/task'])
  }

}
