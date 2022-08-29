import { UserService } from './../services/user.service';
import { VeiculosService } from './../services/veiculos.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-veiculo-create',
  templateUrl: './nav-veiculo-create.component.html',
  styleUrls: ['./nav-veiculo-create.component.css']
})
export class NavVeiculoCreateComponent implements OnInit {

  constructor(private router: Router,
    private veiculoService: VeiculosService,
    private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.userService.userLogado[0])
  }

  navCreateVeiculo(): void {
    this.router.navigate(['nav-veiculo-create/veiculo-create'])
  }
}
