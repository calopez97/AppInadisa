import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

export interface user {
  Maximopicopositivo: string;
  Minimopiconegativo: string;
  pulsemiciclo: string;
  pulciclo: string; 
  ton: string;
  toff: string;
}

export interface user1{
  picokv: string;
  anchoms: string; 
}
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
  columnsToDisplay: string[] = ["Muestras","Maximopicopositivo", "Minimopiconegativo","pulsemiciclo","pulciclo", "ton","toff"];
  public USER_DATA: user[] = [
  ];
  public newUser = {Maximopicopositivo: "", Minimopiconegativo:"", pulsemiciclo:"", pulciclo:"", ton:"", toff:""};
  public myDataArray: any;

  addName() {
    const newUsersArray = this.USER_DATA;
    newUsersArray.push(this.newUser);
    this.myDataArray = [...newUsersArray];
    this.newUser = {Maximopicopositivo:"", Minimopiconegativo:"", pulsemiciclo:"", pulciclo:"",ton:"", toff:""};
    console.warn(this.myDataArray);
  }

  columnsToDisplay1: string[] = ["pulsos","picokv", "anchoms"];
  public USER_DATA1: user1[] = [
  ];
  public newUser1 = {picokv: "", anchoms:""};
  public dataSource: any;

  addPulse() {
    const newUsersArray = this.USER_DATA1;
    newUsersArray.push(this.newUser1);
    this.dataSource = [...newUsersArray];
    this.newUser1 = {picokv:"", anchoms:""};
    console.warn(this.dataSource);
  }
 
  
  

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

  constructor() { 
    this.myDataArray = new MatTableDataSource<user>([...this.USER_DATA]);
  }

  ngOnInit() {
  }

}

