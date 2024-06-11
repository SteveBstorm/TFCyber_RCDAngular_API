import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MovieDetail } from '../models/movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url : string = "https://localhost:7158/api/Movie"

  constructor(private client : HttpClient) { }

  getAll() : Observable<Movie[]> {
    return this.client.get<Movie[]>(this.url)
  }

  getById(id : number) : Observable<MovieDetail> {
    return this.client.get<MovieDetail>(this.url+ "/" + id)
  }
}
