import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import {HomeComponent} from './components/home/home.component'
import{ ArrancadoresComponent } from './components/home/arrancadores/arrancadores.component'
import { BalastosComponent } from './components/home/balastos/balastos.component' 
import {CondensadoresComponent} from './components/home/condensadores/condensadores.component'
import { FormularioComponent } from './components/form/formulario.component'


const routes: Routes = [
  { path:'login', component:LoginComponent },
  {path:'home', component:HomeComponent},
  {path:'', component:LoginComponent},
  {path:'home/arrancadores', component:ArrancadoresComponent}, 
  {path:'home/balastos', component:BalastosComponent},
  {path:'home/condensadores', component:CondensadoresComponent},
  {path:'formulario', component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
