import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url : string = "https://localhost:7158/api/auth"

  isConnectedSubject : Subject<boolean> = new Subject<boolean>()

  get isConnected() : boolean {
    return localStorage.getItem("token") != undefined
  }

  constructor(private client : HttpClient) { }

  login(email:string, password:string){
    this.client.post(this.url+"/login",{email, password}, {responseType : "text"}).subscribe({
      next: (token : string) => {
        localStorage.setItem("token", token)
        this.isConnectedSubject.next(this.isConnected)
        }
    })
  }

  logout() {
    localStorage.removeItem("token")
    this.isConnectedSubject.next(this.isConnected)
  }
  getUserInfo(){

  }

  decodeToken(){
    let token = jwt_decode.jwtDecode(localStorage.getItem("token") ?? "")
    console.log(token)
  }
}
