import { Task } from './../model/Task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SnackbarService } from '../model/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl = 'http://localhost:8080/api';

  constructor(
    private http: HttpClient,
    private snack: SnackbarService
  ) { }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.snack.errorHandler(e))
    );
  }

  getByKey(key: string): Observable<Task> {
    const url = `${this.baseUrl}/task/${key}`;
    return this.http.get<Task>(url).pipe(
      map(obj => obj),
      catchError(e => this.snack.errorHandler(e))
    );
  }

  post(tarefa: Task): Observable<Task> {
    const url = `${this.baseUrl}/add/task`;
    return this.http.post<Task>(url, tarefa).pipe(
      map(obj => obj),
      catchError(e => this.snack.errorHandler(e))
    );
  }

  delete(tarefa: Task): Observable<Task> {
    const url = `${this.baseUrl}/task/${tarefa.key}`;
    return this.http.delete<Task>(url).pipe(
      map(obj => obj),
      catchError(e => this.snack.errorHandler(e))
    );
  }
}
