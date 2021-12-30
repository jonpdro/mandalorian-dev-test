import { EMPTY, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  showAlert(text: string, isError: boolean = false) {
    this.snackBar.open(text, '✖', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    });
  }

  errorHandler(_e: any): Observable<any> {
    this.showAlert('Ops! Ocorreu um erro!', true)
    return EMPTY;
  }
}
