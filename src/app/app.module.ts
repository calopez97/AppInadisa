
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

//Firebase
import {AngularFireAuthModule} from '@angular/fire/auth'
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule, StorageBucket} from '@angular/fire/storage'; 
import {AngularFireModule} from '@angular/fire'; 
import { environment } from 'src/environments/environment';

//footer/SpinnerLoading
import { FooterComponent } from './components/header/footer/footer.component';
import { ProgressSpinerComponent } from './components/header/progress-spiner/progress-spiner.component';

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
    FooterComponent,
    ProgressSpinerComponent,
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
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ], 
  entryComponents:[
    DialogBoxComponent, 
  ],

  providers: [
    { provide: StorageBucket, useValue:'gs://appinadisa.appspot.com'}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

