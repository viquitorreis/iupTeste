import { UserService } from './../services/user.service';
import { Veiculo } from './../veiculo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculos-read',
  templateUrl: './veiculos-read.component.html',
  styleUrls: ['./veiculos-read.component.css']
})
export class VeiculosReadComponent implements OnInit {
  veiculos: Veiculo[]
  displayedColumns = ['placa', 'marca', 'modelo', 'ano', 'acao']

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.veiculos = this.readVeiculos
  }

  readVeiculos = this.userService.userCompleto.veiculos

}
