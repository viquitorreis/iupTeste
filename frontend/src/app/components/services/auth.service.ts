import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // baseUrl = 'http://localhost:3001/user'

  // constructor(private http: HttpClient) {

  // }

  // continuaLogin(userCredentials: any) {
  //   return this.http.get(this.baseUrl, userCredentials)
  // }
  userLogado: boolean = false

  login(){
    this.userLogado = true
  }

  logout(){
    this.userLogado = false
  }

  userAutenticado(){
    return this.userLogado
  }
}
