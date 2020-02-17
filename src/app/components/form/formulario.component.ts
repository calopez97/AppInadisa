import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';

import { MatDialog, MatTable, MatTableDataSource } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';


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
  columnsToDisplay: string[] = ["Muestras","Maximopicopositivo", "Minimopiconegativo","pulsemiciclo","pulciclo", "ton","toff", "Actions"]; 
public USER_DATA: user[] = [
  ];
  
  
  public newUser = {Maximopicopositivo: "", Minimopiconegativo:"", pulsemiciclo:"", pulciclo:"", ton:"", toff:""};
  public myDataArray: any;
  
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  openDialog(Actions,obj){
    obj.Actions = Actions; 
    const dialogRef = this.dialog.open(DialogBoxComponent,{ 
      width: '300px', 
      data: obj
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(_row_obj){
    var d = new Date();
    this.USER_DATA.push;
    this.table.renderRows();
    
  }

  updateRowData(row_obj){
    this.USER_DATA = this.USER_DATA.filter((value,_key)=>{
      if(value.Maximopicopositivo = row_obj.Maximopicopositivo){
        value.Minimopiconegativo = row_obj.Minimopiconegativo;
        value.pulciclo = row_obj.pulciclo; 
        value.pulsemiciclo = row_obj.pulsemiciclo; 
        value.toff = row_obj.toff;
        value.ton = row_obj.ton;
      }
      return true;
    });
  }

  deleteRowData(row_obj){
    this.USER_DATA = this.USER_DATA.filter((value,_key)=>{
      return value.Maximopicopositivo !=row_obj.Maximopicopositivo; 
    });
  }




  addName() {
    const newUsersArray = this.USER_DATA;
    newUsersArray.push(this.newUser);
    this.myDataArray = [...newUsersArray];
    this.newUser = {Maximopicopositivo:"", Minimopiconegativo:"", pulsemiciclo:"", pulciclo:"",ton:"", toff:""};
    console.warn(this.myDataArray);
  }


  columnsToDisplay1: string[] = ["pulsos","picokv", "anchoms","Actions"];
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



  columnsToDisplay2: string[] = ["pulsos1","picokv1", "anchoms1", "Actions"];
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
  
  constructor(public dialog: MatDialog) { 
    this.myDataArray = new MatTableDataSource<user>([...this.USER_DATA]);

  }

  ngOnInit() {
  }

}

