import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../services/user.service';
import { Veiculo } from './../veiculo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculos-delete',
  templateUrl: './veiculos-delete.component.html',
  styleUrls: ['./veiculos-delete.component.css']
})
export class VeiculosDeleteComponent implements OnInit {
  veiculo: Veiculo

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.veiculo = this.getPlaca()
  }
  placa = this.route.snapshot.paramMap.get('placa')

  index = []

  getPlaca(){
    let veiculosDoUser = this.userService.userCompleto.veiculos
    let placaVeiculo = []
    veiculosDoUser.find(v => {
      let veicAtual = []
      if(v.placa === this.placa){
        
        placaVeiculo.push(v)
        veicAtual.push(v)
        let index = veiculosDoUser.indexOf(veicAtual[0])
        this.index.push(index)
      }
    })
    return placaVeiculo[0] 
  }


  deletarVeiculo(){
    let veiculosDoUser = this.userService.userCompleto.veiculos
    let veicsNovosUser = undefined
    veiculosDoUser.find(v => {
      if(v.placa === this.placa){
        veicsNovosUser = veiculosDoUser.filter(prop => prop.placa != this.placa)
      }
    })
    this.userService.userCompleto.veiculos = veicsNovosUser
    let userNovo = this.userService.userCompleto
    this.http.put(`${this.userService.baseUrl}/${this.userService.idUser}`, userNovo).subscribe((res: any)=>{
      if(res){
        this.router.navigate(['nav-veiculo-create'])
        this.userService.showMessage('Veículo excluido')
      } else { this.userService.showMessage('tilt!')}
    }) 
  }

  cancel(){
    this.userService.showMessage('Operação Cancelada')
    this.router.navigate(['nav-veiculo-create'])
  }
}
