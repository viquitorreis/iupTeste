import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { ReactiveFormsModule } from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

import { AuthGuardService } from './components/services/auth-guard.service'
import { AuthService } from'./components/services/auth.service';
import { NavVeiculoCreateComponent } from './components/nav-veiculo-create/nav-veiculo-create.component';
import { VeiculoCreateComponent } from './components/veiculo-create/veiculo-create.component'
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { VeiculosReadComponent } from './components/veiculos-read/veiculos-read.component';
import { VeiculosUpdateComponent } from './components/veiculos-update/veiculos-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BoardUserComponent,
    NavVeiculoCreateComponent,
    VeiculoCreateComponent,
    VeiculosReadComponent,
    VeiculosUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
