import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../../../services/person.service';
import { MovieService } from '../../../services/movie.service';
import { Person } from '../../../models/person.model';
import { MovieCreateForm } from '../../../models/movie.model';

@Component({
  selector: 'app-moviecreate',
  templateUrl: './moviecreate.component.html',
  styleUrl: './moviecreate.component.css'
})
export class MoviecreateComponent {

  fg! : FormGroup
  listePerson! : Person[]
  constructor(
    private builder : FormBuilder,
    private personService : PersonService,
    private movieService: MovieService
  ){
    personService.getAll().subscribe({
      next: (data : Person[]) => {
        this.listePerson = data

        this.fg = builder.group({
          title : [null, [Validators.required]],
          description : [null, [Validators.minLength(40)]],
          realisatorId : [null, [Validators.required, Validators.min(1)]],
          casting : builder.array([])
        })
      }
    })

  }
  getCasting() : FormArray {
    return this.fg.get("casting") as FormArray
  }
  addCastingRow(){

    this.getCasting().push(this.builder.group({
      personId : [null, Validators.required],
      role : [null, Validators.required]
    }))
  }

  removeCastingRow(index: number){
    this.getCasting().removeAt(index)
  }

  validateForm(){
    console.log(this.fg.value)
    let newmovie : MovieCreateForm = this.fg.value

    newmovie.casting.forEach(p => {
      p.firstname = this.listePerson.find(x => x.id== p.id)?.firstname ?? ""
      p.lastname = this.listePerson.find(x => x.id== p.id)?.lastname ?? ""
      p.pictureURL = this.listePerson.find(x => x.id== p.id)?.pictureURL ?? ""
    });

    this.movieService.create(newmovie).subscribe({
      next : ()=> console.log("ok")
    })
  }
}
