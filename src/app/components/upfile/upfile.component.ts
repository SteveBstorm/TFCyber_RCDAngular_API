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

    // console.log(e.target.files[0].name)
    // let test = e.target.files[0].name.split('.')

    // if(test[test.length -1] != "pdf") {
    //   console.log("va mourrir")
    // }
    // else {
    //   this.myfile = e.target.files[0]
    // }
  }

  startUpload(){
    if(this.myfile)
      this.fileService.upload(this.myfile).subscribe({
    next : (url : string) => this.url = url
  })
  }
}
