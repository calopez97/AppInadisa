import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
// import { MatInput } from '@angular/material';


// export interface PeriodicElement {
//   position: number;
//   Maximopicopositivo: any; 
//   Minimopiconegativo: any;
 
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, Maximopicopositivo: MatInput, Minimopiconegativo: MatInput }, 
//   {position: 2,Maximopicopositivo: MatInput, Minimopiconegativo: MatInput}, 
//   {position: 3,Maximopicopositivo: MatInput, Minimopiconegativo: MatInput}, 
//   {position: 4,Maximopicopositivo: MatInput, Minimopiconegativo: MatInput}, 
//   {position: 5,Maximopicopositivo: MatInput, Minimopiconegativo: MatInput}, 
//   {position: 6,Maximopicopositivo: MatInput, Minimopiconegativo: MatInput}, 
//   {position: 7,Maximopicopositivo: MatInput, Minimopiconegativo: MatInput}, 
//   {position: 8,Maximopicopositivo: MatInput, Minimopiconegativo: MatInput}, 
//   {position: 9, Maximopicopositivo: MatInput, Minimopiconegativo: MatInput}] espere, dejeme un momento 
// Esto es lo que llevo, pero simplemente queria meter una datatable aqui.



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


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

  // displayedColumns: string[] = ['position','Maximopicopositivo','Minimopiconegativo']

  constructor() { }

  ngOnInit() {
  }

}

