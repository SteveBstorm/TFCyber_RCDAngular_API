import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MovieCreateForm, MovieDetail } from '../models/movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url : string = "http://tfcybersecu.somee.com/api/Movie"

  constructor(private client : HttpClient) { }

  getAll() : Observable<Movie[]> {
    return this.client.get<Movie[]>(this.url)
  }

  getById(id : number) : Observable<MovieDetail> {
    return this.client.get<MovieDetail>(this.url+ "/" + id)
  }

  create(form : MovieCreateForm){
    //let token = localStorage.getItem("token")
    let myheader : HttpHeaders = new HttpHeaders({
      "authorization" : "bearer " + localStorage.getItem("token")
    })
    return this.client.post(this.url, form, {headers : myheader})
  }

  delete(id :number){
    return this.client.delete(this.url+"/"+id)
  }
}
