import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service'
import { User } from './../../user'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})  
export class LoginComponent implements OnInit {
  isActive = false

  public loginForm!: FormGroup

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder,
    private authService: AuthService) {

    }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:[''],
      senha:['']
    })
  }

  loginUser(){
    this.http.get<any>(this.userService.baseUrl).subscribe(res=> {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.senha === this.loginForm.value.senha
      })
      if(user){
        alert('Logou de boa')
        this.loginForm.reset()
        this.authService.login()
        this.router.navigate(['board-user'])
      } else {
        alert('Usuario nao encontrado')
      }
    }, err=> {
      alert('algo deu errado')
    }) 
  }
}
