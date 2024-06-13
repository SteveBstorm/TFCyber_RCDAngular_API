import { ResolveFn } from '@angular/router';
import { MovieDetail } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { inject } from '@angular/core';
import { catchError, of, tap } from 'rxjs';

export const movieResolver: ResolveFn<MovieDetail> = (route, state) => {
  const movieService : MovieService = inject(MovieService)
  let id = route.params["id"]

  return movieService.getById(id)
    .pipe(catchError((error) => of(error)
    .pipe(tap((error) => console.log(error)))))
};
