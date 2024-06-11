import { Component } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from '../../../models/movie.model';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrl: './moviedetail.component.css'
})
export class MoviedetailComponent {
  id! : number
  currentMovie! : MovieDetail

  constructor(
    private movieService : MovieService,
    private ar : ActivatedRoute
  ){
    this.id = ar.snapshot.params["id"]

    movieService.getById(this.id).subscribe({
      next : (data : MovieDetail) => {
        this.currentMovie = data
      }
    })
  }
}
