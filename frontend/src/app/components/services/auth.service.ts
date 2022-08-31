import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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
