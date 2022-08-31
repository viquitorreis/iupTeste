import { Veiculo } from './../../veiculo.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './../../user'
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isActive = false
  register: FormGroup

  constructor(private userService: UserService,
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder) { 
      this.register = this.fb.group({
        name: [''],
        email: [''],
        senha: [''],
        telefone: [''],
      })
    }

  

  ngOnInit(): void {
  }
  createUser() {
    const request = {
      name: this.register.get('name').value,
      email: this.register.get('email').value,
      senha: this.register.get('senha').value,
      telefone: this.register.get('telefone').value,
      veiculos: []
    }
    this.http.post(this.userService.baseUrl, request).subscribe({
      next: (n) => this.router.navigate(['/login']),
      error: (err) => this.userService.showMessage('ERROR'),
      complete: () => this.userService.showMessage('User criado com sucesso')
    })
  }
}
