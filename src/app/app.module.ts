import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { AuthService } from './service/auth.service';
import { authGuard } from './guard/auth.guard';
import { HomeComponent } from './views/home/home.component';
import { BarTopComponent } from './components/bar-top/bar-top.component';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { InputCidadeComponent } from './components/input-group/input-cidade/input-cidade.component';
import { InputTipoAnimalComponent } from './components/input-group/input-tipo-animal/input-tipo-animal.component';
import { InputIdadeComponent } from './components/input-group/input-idade/input-idade.component';
import { InputCorPelagemComponent } from './components/input-group/input-cor-pelagem/input-cor-pelagem.component';
import { InputPorteComponent } from './components/input-group/input-porte/input-porte.component';
import { BuscaComponent } from './components/busca/busca.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { PetsComponent } from './components/pets/pets.component';
import { RodapeComponent } from './components/rodape/rodape.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BarTopComponent,
    FormSearchComponent,
    InputCidadeComponent,
    InputTipoAnimalComponent,
    InputIdadeComponent,
    InputCorPelagemComponent,
    InputPorteComponent,
    BuscaComponent,
    RegistrarComponent,
    PetsComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [authGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
