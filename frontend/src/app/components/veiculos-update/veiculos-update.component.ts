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
    private route: ActivatedRoute) {
      this.formsVeiculo = this.formBuilder.group({
        placa: [''],
        marca: [''],
        modelo: [''],
        ano: ['']
      })
    }

  ngOnInit(): void {
    console.log(this.getPlaca())
    this.veiculo = this.getPlaca()
  }

  placa = this.route.snapshot.paramMap.get('placa')

  getPlaca(){
    let veiculosDoUser = this.userService.userCompleto.veiculos
    let placaVeiculo = []
    veiculosDoUser.find(v => {
      if(v.placa === this.placa){
        placaVeiculo.push(v)
      }
    })
    return placaVeiculo[0]
  }

  atualizarVeiculo(veiculo: Veiculo){
    this.http.put(`${this.userService.baseUrl}/${this.userService.idUser}`, veiculo)
    this.userService.showMessage('User atualizado djow :)')
  }

  cancel(){
    
  }
}
