import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovielistComponent } from './components/movie/movielist/movielist.component';
import { MoviedetailComponent } from './components/movie/moviedetail/moviedetail.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ErrorComponent } from './shared/error/error.component';
import { movieResolver } from './shared/resolver/movie.resolver';
import { MoviecreateComponent } from './components/movie/moviecreate/moviecreate.component';

const routes: Routes = [
  {path : "", redirectTo : "movielist", pathMatch:'full'},
  {path : "movielist", component : MovielistComponent},
  {path : "moviedetail/:id", resolve: {toto : movieResolver}, component : MoviedetailComponent},
  {path : "moviecreate", component : MoviecreateComponent},
  {path : "login", component : LoginComponent},
  {path : "**", component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
