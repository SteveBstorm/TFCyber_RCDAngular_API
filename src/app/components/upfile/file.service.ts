import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private url : string = "https://localhost:7158/api/file"

  constructor(
    private client : HttpClient
  ) { }

  upload(fileToUpload : File) : Observable<string> {
    let formData : FormData = new FormData()
    formData.append('myfile', fileToUpload, fileToUpload.name)
    return this.client.post(this.url, formData, {responseType : 'text'})
  }
}
