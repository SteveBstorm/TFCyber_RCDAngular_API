import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovielistComponent } from './components/movie/movielist/movielist.component';
import { MoviedetailComponent } from './components/movie/moviedetail/moviedetail.component';

const routes: Routes = [
  {path : "movielist", component : MovielistComponent},
  {path : "moviedetail/:id", component : MoviedetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
