
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Angular Material
import { MatModule } from './mat/mat.module';

// Componentes
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CondensadoresComponent } from './components/home/condensadores/condensadores.component';
import { BalastosComponent } from './components/home/balastos/balastos.component';
import { FormularioComponent } from './components/form/formulario.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { FormthreetapComponent } from './components/home/balastos/formthreetap/formthreetap.component';
import { FormcwaComponent } from './components/home/balastos/formcwa/formcwa.component';
import { FormdoblepotenciaComponent } from './components/home/balastos/formdoblepotencia/formdoblepotencia.component';


import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms'; 



@NgModule({
  declarations: [ 
    FormularioComponent,
    LoginComponent,
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CondensadoresComponent,
    BalastosComponent,
    DialogBoxComponent,
    FormthreetapComponent,
    FormcwaComponent,
    FormdoblepotenciaComponent,
    
   
  ],
  
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    FormsModule,
    FormsModule,
  ], 
  entryComponents:[
    DialogBoxComponent, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

