import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  fg! : FormGroup
  constructor(private authService : AuthService,
    private builder : FormBuilder
  ){
    this.fg = builder.group({
      email : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required]]
    })

  }
  login(){
    this.authService.login(this.fg.value["email"], this.fg.value["password"])
  }
}
