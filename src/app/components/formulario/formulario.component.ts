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

export interface user2{
  picokv1: string;
  anchoms1: string; 
}

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
  resultado: string;
  

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

  columnsToDisplay2: string[] = ["pulsos1","picokv1", "anchoms1"];
  public USER_DATA2: user2[] = [
  ];
  public newUser2 = {picokv1: "", anchoms1:""};
  public dataSource2: any;

  addPulseMin() {
    const newUsersArray = this.USER_DATA2;
    newUsersArray.push(this.newUser2);
    this.dataSource2 = [...newUsersArray];
    this.newUser2 = {picokv1:"", anchoms1:""};
    console.warn(this.dataSource2);
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

  rack= new FormControl(); 
  rackList: string[]= ['Pasa','No Pasa']

  cum= new FormControl(); 
  cumList: string[]=['Cumple', 'No Cumple'] 

  aceptado = false;
  rechazado = false; 
  
  constructor() { 
    this.myDataArray = new MatTableDataSource<user>([...this.USER_DATA]);
  }

  ngOnInit() {
  }

}

