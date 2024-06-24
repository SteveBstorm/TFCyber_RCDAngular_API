import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, reduce, tap } from 'rxjs';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private url : string = "http://tfcybersecu.somee.com/api/person"

  constructor(private client : HttpClient) { }

  getAll() : Observable<Person[]> {
    return this.client.get<Person[]>(this.url)
    }

}
