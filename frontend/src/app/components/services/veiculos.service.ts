import { Observable } from 'rxjs';
import { Veiculo } from './../veiculo.model';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(private userService: UserService,
    private http: HttpClient) { }

  create(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(this.userService.baseUrl, veiculo)
  }
}
