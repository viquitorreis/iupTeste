import { User } from './../user';
import { HttpClient } from '@angular/common/http';
import { Veiculo } from './../veiculo.model';
import { VeiculosService } from './../services/veiculos.service';
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
  novoVeiculo: FormGroup
  
  constructor(private userService: UserService,
    private router: Router,
    private veiculoService: VeiculosService,
    private http: HttpClient,
    private formBuilder: FormBuilder) {
      this.novoVeiculo = this.formBuilder.group({
        placa: [''],
        montadora: [''],
        modelo: [''],
        ano: ['']
      })
    }
    
    ngOnInit(): void {
    }
    
    Veiculo: Veiculo = {
      placa: 'ABc-1234',
      marca: 'FIAT',
      modelo: 'UNO',
      ano: '1997'
    }
    
    // usuario = this.userService.userCompleto.append(this.userService.userCompleto.veiculo)
  createVeiculo(){
    const antigoUser = this.userService.userCompleto

    let veiculosNoUser = antigoUser.veiculos
    let achaVeic = veiculosNoUser.find(v => v.placa === this.Veiculo.placa)
    if(!achaVeic){
      if(!antigoUser.veiculos) {
        antigoUser.veiculos = []
      }
      antigoUser.veiculos.push(this.Veiculo)
      this.http.put(`${this.userService.baseUrl}/${this.userService.idUser}`, antigoUser).subscribe((res: any)=>{
        if(res){
          this.userService.showMessage('Veículo criado')
        }
      })
    } else { this.userService.showMessage('Erro: Veículo já existe') }
  }


  // idUser = []
  // getIdUser = this.http.get<any>(this.userService.baseUrl).subscribe(res=>{
  //   res.find((a: any)=>{
  //     if(a.email === this.userService.userLogado[0]){
  //       this.idUser = a.id
  //     }
  //   })
  // })
  

  // createVeiculo(): void {
  //   let userAtual = this.userService.userLogado[0]
  //   console.log(userAtual)
  //   this.http.get<any>(this.userService.baseUrl).subscribe(res=>{
  //     const user = res.find((a: any)=>{
  //       return a.email === this.userService.userLogado[0]
  //     })
  //     if(user){
  //       const veic = user.veiculos

  //       console.log(veic)
  //       //user.veiculo.push(this.Veiculo)
  //       let veiculoUser = user.veiculo
  //       return this.http.patch<any>(`${this.userService.baseUrl}/user/${user.id}`, this.Veiculo)
        

  //       // // this.http.post(this.userService.baseUrl, this.Veiculo).subscribe({
  //       // //   next: (n) => {
  //       // //     veiculoUser.push(this.Veiculo)
  //       // //     this.router.navigate(['/nav-veiculo-create'])
  //       // //   },
  //       // //   error: (err) => this.userService.showMessage('ERROR'),
  //       // //   complete: () => this.userService.showMessage('Veiculo riado com sucesso')
  //       // })
  //       // console.log(user)


  //     } else {
  //       alert('deu errado essa merda')
  //     }
  //   })
  // }



  // public createVeiculo(id: number, itemToAdd: string): void { 
  //   console.log('sending patch request to add an item');

  //   this.http.patch(`${this.userService.baseUrl}/user/${menuId}`, itemToAdd).subscribe(
  //     res => { 
  //       console.log('received ok response from patch request');
  //     },
  //     error => {
  //       console.error('There was an error during the request');
  //       console.log(error);
  //     });

  //   console.log('request sent. Waiting for response...');

  // }

    // createVeiculo(){
    //   console.log(this.idUser)
    // }

  cancel(): void {
    this.userService.showMessage('Operação cancelada')
    this.router.navigate(['nav-veiculo-create'])  
  }
}
