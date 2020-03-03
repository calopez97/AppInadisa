import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import {HomeComponent} from './components/home/home.component'
import { BalastosComponent } from './components/home/balastos/balastos.component' 
import {CondensadoresComponent} from './components/home/condensadores/condensadores.component'
import { FormularioComponent } from './components/form/formulario.component'
import { FormthreetapComponent } from './components/home/balastos/formthreetap/formthreetap.component';
import { FormcwaComponent } from './components/home/balastos/formcwa/formcwa.component';
import { FormdoblepotenciaComponent } from './components/home/balastos/formdoblepotencia/formdoblepotencia.component';


const routes: Routes = [
  { path:'', component:LoginComponent, pathMatch: 'full' },
  { path:'login', component:LoginComponent },
  { path:'home', component:HomeComponent },
  { path:'home/balastos', component:BalastosComponent },
  { path:'home/condensadores', component:CondensadoresComponent },
  { path:'formulario', component:FormularioComponent },
  { path:'formulariothreetap', component:FormthreetapComponent },
  { path:'formulariocwa', component: FormcwaComponent },
  { path:'formulariodoblepot', component: FormdoblepotenciaComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
