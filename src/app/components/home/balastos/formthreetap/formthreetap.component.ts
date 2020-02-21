import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';



export interface inspelectrica{
  corriente: any; 
  perdidas: any; 
  corrienteik:any;  
}

@Component({
  selector: 'app-formthreetap',
  templateUrl: './formthreetap.component.html',
  styleUrls: ['./formthreetap.component.scss']
})




export class FormthreetapComponent implements OnInit {
 
  toppings = new FormControl();
  toppingList: string[] = ['Normal', 'Severa', 'Reducida'];

  Empaque = new FormControl(); 
  EmpaqueList: string[] = ['Estado','Marcación','Cantidad'];


  Producto = new FormControl(); 
  ProductoList: string[] = ['Estado','Fecha','Tampo']; 

  Acabado = new FormControl(); 
  AcabadoList: string[] = ['Abierto','Encapsulado']

  Terminales= new FormControl();
  TerminalesList: String[] = ['Estado','Longitud']; 
  

 columnsToDisplay: string[] = ["Muestras","corriente","perdidas","corrienteik", "Actions"]; 
public USER_DATA: inspelectrica[] = [
  ];

  public newInsp = {corriente: "", perdidas:"", corrienteik:""};
  public myNewData: any;

  addInsp() {
    const newUsersArray = this.USER_DATA;
    newUsersArray.push(this.newInsp);
    this.myNewData = [...newUsersArray];
    this.newInsp = {corriente: "", perdidas:"", corrienteik:""};
    console.warn(this.myNewData); 
  }



  constructor(public dialog: MatDialog){
    this.myNewData= new MatTableDataSource<inspelectrica>([...this.USER_DATA])
  }

ngOnInit() {
    
  }

}

