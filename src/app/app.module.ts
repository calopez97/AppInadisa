
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { LoginComponent } from './components/user/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat/mat.module';
import { HomeComponent } from './components/home/home.component';
import {MatCardModule} from '@angular/material/card'; 
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ArrancadoresComponent } from './components/home/arrancadores/arrancadores.component';
import { CondensadoresComponent } from './components/home/condensadores/condensadores.component';
import { BalastosComponent } from './components/home/balastos/balastos.component';
import { FormularioComponent } from './components/formulario/formulario.component';





@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ArrancadoresComponent,
    CondensadoresComponent,
    BalastosComponent,
    FormularioComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    MatCardModule,
    MatDividerModule,
    MatTooltipModule
  ], 

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
