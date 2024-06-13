import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  isConnected! : boolean

  constructor(private authService : AuthService,
    private router: Router
  ){
    authService.isConnectedSubject.subscribe({
      next : (value : boolean) => this.isConnected = value
    })
  }

  logout(){
    this.authService.logout()
    this.router.navigate(["home"])
  }

}
