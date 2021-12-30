import { Task } from './../model/Task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl = 'http://localhost:8080/api';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  getByKey(key: string): Observable<Task> {
    const url = `${this.baseUrl}/task/${key}`;
    return this.http.get<Task>(url);
  }

  post(tarefa: Task): Observable<Task> {
    const url = `${this.baseUrl}/add/task`;
    return this.http.post<Task>(url, tarefa);
  }

  delete(tarefa: Task): Observable<Task> {
    const url = `${this.baseUrl}/task/${tarefa.key}`;
    return this.http.delete<Task>(url);
  }
}
