import { Injectable } from '@angular/core';
import { User } from './../user'
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

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

  create(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user)
  }

  readByEmail(id: number): Observable<User> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<User>(url)
  }
  

  readUser(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl)
  }

  login(email: string, senha: string): Observable<any> {
    return this.http.post(
      this.baseUrl + 'login',
      {
        email,
        senha
      },
      httpOptions )
  }

  getUsers(): Observable<User>{
    return this.http.get<User>(this.baseUrl)
  }

  userLogado = []
}
