import { Component } from '@angular/core';
import { FileService } from './file.service';

@Component({
  selector: 'app-upfile',
  templateUrl: './upfile.component.html',
  styleUrl: './upfile.component.css'
})
export class UpfileComponent {
  myfile? : File
  url! : string

  constructor(private fileService : FileService){}

  loadFile(e : any) {
    this.myfile = e.target.files[0]
    console.log(this.myfile?.name)
  }

  startUpload(){
    if(this.myfile)
      this.fileService.upload(this.myfile).subscribe({
    next : (url : string) => this.url = url
  })
  }
}
