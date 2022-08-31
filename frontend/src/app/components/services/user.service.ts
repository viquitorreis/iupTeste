import { Injectable } from '@angular/core';
import { User } from './../user'
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:3001/user'

  constructor(private http: HttpClient,
    private snackbar: MatSnackBar) { }


  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 2500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-succes']
    })
  }

  userLogado = []
 

  idUser = ''


  userCompleto: User

}
