import { Veiculo } from './../veiculo.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculos-update',
  templateUrl: './veiculos-update.component.html',
  styleUrls: ['./veiculos-update.component.css']
})
export class VeiculosUpdateComponent implements OnInit {
  formsVeiculo: FormGroup
  veiculo: Veiculo

  constructor(private userService: UserService,
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

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

  atualizarVeiculo(){
    let veiculosAntigosDouser = this.userService.userCompleto.veiculos
    let userAntigo = this.userService.userCompleto
    veiculosAntigosDouser.find(v => {
      if(v.placa === this.placa){
        userAntigo.veiculos.splice(this.index[0], 1, v)
      }
    })
    this.http.put(`${this.userService.baseUrl}/${this.userService.idUser}`, userAntigo).subscribe((res: any)=>{
      if(res){
        this.router.navigate(['nav-veiculo-create'])
        this.userService.showMessage('Veículo atualizado')
      } else { this.userService.showMessage('tilt!')}
    }) 
  }

  cancel(){
    this.userService.showMessage('Operação Cancelada')
    this.router.navigate(['nav-veiculo-create'])
  }
}
