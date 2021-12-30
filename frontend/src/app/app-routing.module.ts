import { TaskViewComponent } from './view/task/task-view/task-view.component';
import { TaskDeleteComponent } from './view/task/task-delete/task-delete.component';
import { TaskCreateComponent } from './view/task/task-create/task-create.component';
import { TaskHomeComponent } from './view/task/task-home/task-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'task'
  },
  {
    path: 'task',
    component: TaskHomeComponent
  },
  {
    path: 'add/task',
    component: TaskCreateComponent
  },
  {
    path: 'task/delete/:key',
    component: TaskDeleteComponent
  },
  {
    path: 'task/view/:key',
    component: TaskViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
