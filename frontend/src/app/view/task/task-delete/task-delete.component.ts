import { HeaderService } from './../../../model/header.service';
import { SnackbarService } from './../../../model/snackbar.service';
import { Task } from './../../../model/Task';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from './../../../controller/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.scss']
})
export class TaskDeleteComponent implements OnInit {

  tarefa: Task = {
    key: "",
    value: ""
  }

  constructor(
    private service: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: SnackbarService,
    private headerService: HeaderService
    ) {
        headerService.headerData = {
          title: 'Deleção de Tarefas',
          routeUrl: '/task/delete'
        }
     }

  ngOnInit() {
    const key = this.route.snapshot.params['key']

    this.service.getByKey(key).subscribe(task => {
      this.tarefa = task
    })
  }

  deleteTask() {
    return this.service.delete(this.tarefa).subscribe(() => {
      this.alert.showAlert('Tarefa deletada com sucesso!')
      this.router.navigate(['/task'])
    })
  }

  cancel() {
    return this.router.navigate(['/task'])
  }

}
