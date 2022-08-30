import { Veiculo } from './../veiculo.model';
import { MatIconModule } from '@angular/material/icon';
import { Injectable } from '@angular/core';
import { User } from './../user'
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  userLogado = []
  
  dadosAtuaisUser() {
    this.http.get<any>(this.baseUrl).subscribe(resp=>{
      resp.find((a: any)=>{
        
      })
    })
  }

  idUser = ''


  userCompleto: User
  
  getUserByEmail() {
    this.http.get<any>(this.baseUrl).subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.userLogado[0]
      })
      if (user) {
        console.log(user)
      }
    })
  }
}
