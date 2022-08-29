import { HttpClient } from '@angular/common/http';
import { Veiculo } from './../veiculo.model';
import { VeiculosService } from './../services/veiculos.service';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculo-create',
  templateUrl: './veiculo-create.component.html',
  styleUrls: ['./veiculo-create.component.css']
})
export class VeiculoCreateComponent implements OnInit {
  Veiculo: Veiculo = {
    placa: 'ABC-1234',
    marca: 'FIAT',
    modelo: 'UNO',
    ano: '1997'
  }

  constructor(private userService: UserService,
    private router: Router,
    private veiculoService: VeiculosService,
    private http: HttpClient) { }

  ngOnInit(): void {
  }


  createVeiculo(): void {
    let userAtual = this.userService.userLogado[0]
    console.log(userAtual)
    this.http.get<any>(this.userService.baseUrl).subscribe(res=>{
      const user = res.find((a: any)=>{
        return a.email === this.userService.userLogado[0]
      })
      if(user){
        console.log(user.veiculo)
        //user.veiculo.push(this.Veiculo)
        let veiculoUser = user.veiculo
        this.http.post(this.userService.baseUrl, this.Veiculo).subscribe({
          next: (n) => {
            veiculoUser.push(this.Veiculo)
            this.router.navigate(['/nav-veiculo-create'])
          },
          error: (err) => this.userService.showMessage('ERROR'),
          complete: () => this.userService.showMessage('Veiculo riado com sucesso')
        })
        console.log(user)
      } else {
        alert('deu errado essa merda')
      }
    })
  }

  cancel(): void {
    this.userService.showMessage('Operação cancelada')
    this.router.navigate(['nav-veiculo-create'])  
  }
}
