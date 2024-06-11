import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovielistComponent } from './components/movie/movielist/movielist.component';
import { MoviecreateComponent } from './components/movie/moviecreate/moviecreate.component';
import { MoviedetailComponent } from './components/movie/moviedetail/moviedetail.component';
import { MovieupdateComponent } from './components/movie/movieupdate/movieupdate.component';
import { PersondetailComponent } from './components/person/persondetail/persondetail.component';
import { PersoncreateComponent } from './components/person/personcreate/personcreate.component';
import { PersonlistComponent } from './components/person/personlist/personlist.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProfilComponent } from './components/auth/profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    MovielistComponent,
    MoviecreateComponent,
    MoviedetailComponent,
    MovieupdateComponent,
    PersondetailComponent,
    PersoncreateComponent,
    PersonlistComponent,
    LoginComponent,
    RegisterComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    /* Ajouter les modules nécéssaire pour http et les formulaires avec validation*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
