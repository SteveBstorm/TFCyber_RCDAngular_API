import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url : string = "https://localhost:7158/api/auth"

  isConnectedSubject : Subject<boolean> = new Subject<boolean>()



  constructor(private client : HttpClient) { }

  login(email:string, password:string){
    this.client.post(this.url+"/login",{email, password}, {responseType : "text"}).subscribe({
      next: (token : string) => {
        localStorage.setItem("token", token)
        this.isConnectedSubject.next(true)
        }
    })
  }

  logout() {
    localStorage.removeItem("token")
    this.isConnectedSubject.next(false)
  }
  getUserInfo(){

  }
}
