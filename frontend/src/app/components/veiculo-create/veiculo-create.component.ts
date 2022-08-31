import { User } from './../user';
import { HttpClient } from '@angular/common/http';
import { Veiculo } from './../veiculo.model';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-veiculo-create',
  templateUrl: './veiculo-create.component.html',
  styleUrls: ['./veiculo-create.component.css']
})
export class VeiculoCreateComponent implements OnInit {
  formsVeiculo: FormGroup
  
  constructor(private userService: UserService,
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder) {
      this.formsVeiculo = this.formBuilder.group({
        placa: [''],
        marca: [''],
        modelo: [''],
        ano: ['']
      })
    }
    
    ngOnInit(): void {
    }
    

    buttonType: any

    onSubmit(buttonType): void {
    if(buttonType==='salvar') {
      this.salvar()
      this.formsVeiculo.reset()
    }
    if(buttonType==='cancelar') {
      this.cancelar()
      this.formsVeiculo.reset()
    }
  }
  
  salvar(){
    const antigoUser = this.userService.userCompleto
    let veiculosNoUser = antigoUser.veiculos
    const novoVeiculoRequest = {
      placa: this.formsVeiculo.get('placa').value,
      marca: this.formsVeiculo.get('marca').value,
      modelo: this.formsVeiculo.get('modelo').value,
      ano: this.formsVeiculo.get('ano').value,
    }
    let acharVeiculo = veiculosNoUser.find(v => v.placa === novoVeiculoRequest.placa)
    if(!acharVeiculo){
      if(!antigoUser.veiculos) {
        antigoUser.veiculos = []
      }
      antigoUser.veiculos.push(novoVeiculoRequest)
      this.http.put(`${this.userService.baseUrl}/${this.userService.idUser}`, antigoUser).subscribe((res: any)=>{
        if(res){
          this.router.navigate(['nav-veiculo-create'])
          this.userService.showMessage('Veículo criado')
        }
      })
    } else { this.userService.showMessage('Erro: Veículo já existe') }
  }

  cancelar(): void {
    this.userService.showMessage('Operação cancelada')
    this.router.navigate(['nav-veiculo-create'])  
  }
}
