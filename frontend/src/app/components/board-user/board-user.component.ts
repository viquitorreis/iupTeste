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
    private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
    this.router.navigate([''])
  }
}
