import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['Normal', 'Severa', 'Reducida'];


  
  Empaque = new FormControl(); 
  EmpaqueList: string[] = ['Estado','Marcación','Cantidad'];


  Producto = new FormControl(); 
  ProductoList: string[] = ['Estado','Fecha','Tampo']; 

  Terminales= new FormControl();
  TerminalesList: String[] = ['Estado','Longitud'];

  aceptado = false;
  rechazado = false; 

  constructor() { }

  ngOnInit() {
  }

}

