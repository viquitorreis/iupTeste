import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
    this.userService.idUser = undefined
    this.userService.userCompleto = undefined
    this.router.navigate([''])
  }

  navCreateVeiculo(): void {
    this.router.navigate(['board-user/veiculo-create'])
  }
}
