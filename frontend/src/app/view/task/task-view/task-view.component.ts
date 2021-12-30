import { HeaderService } from './../../../model/header.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from './../../../controller/task.service';
import { Task } from './../../../model/Task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  tarefa: Task = {
    key: "",
    value: ""
  }

  constructor(
    private service: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService
    ) {
        headerService.headerData = {
          title: 'Visualizar Tarefa',
          routeUrl: '/add/task'
        }
     }

  ngOnInit() {
    const key = this.route.snapshot.params['key']

    this.service.getByKey(key).subscribe(task => {
      this.tarefa = task
    })
  }

}
