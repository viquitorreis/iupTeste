import { AuthGuardService } from './components/services/auth-guard.service';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/public/login/login.component'
import { RegisterComponent } from './components/public/register/register.component'
import { BoardUserComponent } from './components/board-user/board-user.component'
import { VeiculoCreateComponent } from './components/veiculo-create/veiculo-create.component'
import { NavVeiculoCreateComponent } from './components/nav-veiculo-create/nav-veiculo-create.component';
import { VeiculosUpdateComponent } from './../app/components/veiculos-update/veiculos-update.component'
import { VeiculosDeleteComponent } from './components/veiculos-delete/veiculos-delete.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'nav-veiculo-create',
    component: NavVeiculoCreateComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'board-user',
    component: BoardUserComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'nav-veiculo-create/veiculo-create',
    component: VeiculoCreateComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'nav-veiculo-create/veiculosUpdate/:placa',
    component: VeiculosUpdateComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'nav-veiculo-create/veiculosDelete/:placa',
    component: VeiculosDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
