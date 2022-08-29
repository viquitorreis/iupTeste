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

  constructor(private userService: UserService,
    private router: Router,
    private veiculoService: VeiculosService) { }

  ngOnInit(): void {
  }


  createVeiculo(): void {
    // this.veiculoService.create()
    // this.userService.showMessage('Veículo criado com sucesso!')
    // this.router.navigate(['nav-veiculo-create'])
  }

  cancel(): void {
    this.userService.showMessage('Operação cancelada')
    this.router.navigate(['nav-veiculo-create'])  
  }
}
