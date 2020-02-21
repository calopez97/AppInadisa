
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
import { CondensadoresComponent } from './components/home/condensadores/condensadores.component';
import { BalastosComponent } from './components/home/balastos/balastos.component';
import { FormularioComponent } from './components/form/formulario.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms'; 
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { FormthreetapComponent } from './components/home/balastos/formthreetap/formthreetap.component';
import { FormcwaComponent } from './components/home/balastos/formcwa/formcwa.component';
import { FormdoblepotenciaComponent } from './components/home/balastos/formdoblepotencia/formdoblepotencia.component';

import {HttpClientModule} from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';














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
  
  imports: [MatToolbarModule,
    MatPaginatorModule, 
    MatSortModule, 
    HttpClientModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    MatCardModule,
    MatDividerModule,
    MatTooltipModule,
    FormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSliderModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule, MatTableModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule
  ], 
  entryComponents:[
    DialogBoxComponent, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

