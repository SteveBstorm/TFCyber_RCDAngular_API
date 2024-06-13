import { Component } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {

  liste : Movie[] = []

  constructor(
    private movieService : MovieService,
    private router : Router
  ){
    this.loadData()
  }

  loadData() {
    this.movieService.getAll().subscribe({
      next : (data : Movie[]) => { this.liste = data },
      error : (error) => {console.log(error)}
    })
  }

  selectMovie(id:number){
    this.router.navigate(["moviedetail", id])
  }

  deleteMovie(id : number) {
    this.movieService.delete(id).subscribe(
      {
      next : () => this.loadData()
    })

  }


}
