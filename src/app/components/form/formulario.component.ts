import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, FormArray, ControlContainer} from '@angular/forms';

import { MatDialog, MatTable, MatTableDataSource } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { FormcwaComponent } from '../home/balastos/formcwa/formcwa.component';


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
  
  Arracform: FormGroup;
  
  topping = new FormControl(); 
  toppingList:string[]=['Normal', 'Severa', 'Reducida']
  toppingSelected=[]; 
  toppingSelectedE=[]; 

  
  Empaque = new FormControl(); 
  EmpaqueList: string[] = ['Estado','Marcación','Cantidad'];
  EmpaqueSelected=[]; 


  Producto = new FormControl(); 
  ProductoList: string[] = ['Estado','Fecha','Tampo'];
  ProductoSelected=[];  

  Terminales= new FormControl();
  TerminalesList: String[] = ['Estado','Longitud'];
  TerminalesSelected=[]; 



  rack= new FormControl(); 
  rackList: string[]= ['Pasa','No Pasa']

  cum= new FormControl(); 
  cumList: string[]=['Cumple', 'No Cumple'] 

  aceptado = false;
  rechazado = false; 


  form = {
    arrancador:"",
    tamLote: "",
    semana: "",
    fabricacion: "",
    muestras:"", 
    muestraselec:"", 
    muestrasmec:"", 
  };
  
  


addTerminales(){
  const arr=this.TerminalesList.map(item =>{
    return this._fb.control(false)
  }); 
  return this._fb.array(arr);
}

addProducto(){
  const arr=this.ProductoList.map(item =>{
    return this._fb.control(false)
  }); 
  return this._fb.array(arr);
}

addEmpaque(){
  const arr=this.EmpaqueList.map(item =>{
    return this._fb.control(false)
  });
  return this._fb.array(arr);
}

addClasEle(){
  const arr=this.toppingList.map(item =>{
    return this._fb.control(false)
  }); 
  return this._fb.array(arr);

}
addClasMec(){
  const arr=this.toppingList.map(item =>{
    return this._fb.control(false); 
  });
  return this._fb.array(arr)
}




  get toppingListArray(){
    return <FormArray>this.Arracform.get('tipoClasMec');
  }

  get toppingListArrayE(){
    return <FormArray>this.Arracform.get('tipoClasElec');
  }
  
  get EmpaqueListArray(){
    return <FormArray>this.Arracform.get('Empaque')
  }

  get ProductoListArray(){
    return <FormArray>this.Arracform.get('Producto')
  }

  get TerminalesListArray(){
    return <FormArray>this.Arracform.get('Terminales')
  }

  //Checkear los datos seleccionados 

  checktoppingListisTouched(){
    let flg=false;
    this.TerminalesListArray.controls || this.ProductoListArray.controls || this.EmpaqueListArray.controls || this.toppingListArray.controls.forEach(control =>{
      if(control.touched){
        flg=true; 
      }
    }); 
    return flg; 
  }

//Obtener los valores de cada lista
  getSelectedtoppingValue(){
    this.toppingSelected=[]; 
    this.toppingListArray.controls.forEach((control, i)=>{
      if(control.value){
        this.toppingSelected.push(this.toppingList[i]);
      }
    }); 
  }

  getSelectedtoppingValueElec(){
    this.toppingSelectedE=[]; 
    this.toppingListArrayE.controls.forEach((control, i)=>{
      if (control.value){
        this.toppingSelectedE.push(this.toppingList[i]);
      }
    });
    
  } 

  getSelectedEmpaqueValue(){
    this.EmpaqueSelected=[]; 
    this.EmpaqueListArray.controls.forEach((control, i)=>{
      if(control.value){
        this.EmpaqueSelected.push(this.EmpaqueList[i]);
      }
    });
  }

  getSelectedProductoValue(){
    this.ProductoSelected=[]; 
    this.ProductoListArray.controls.forEach((control, i)=> {
      if(control.value){
        this.ProductoSelected.push(this.ProductoList[i]);
      }
    });
  }
  
  getSelectedTerminalesValue(){
    this.TerminalesSelected=[]; 
    this.TerminalesListArray.controls.forEach((control, i)=>{
      if(control.value){
        this.TerminalesSelected.push(this.TerminalesList[i]);
      }
    }); 
  }

  constructor(public dialog: MatDialog, private _fb: FormBuilder) { 
    this.myDataArray = new MatTableDataSource<user>([...this.USER_DATA]);
  }

  ngOnInit() {
    this.Arracform =this._fb.group({
      tipoClasMec: this.addClasMec(),
      tipoClasElec: this.addClasEle(),
      Empaque:this.addEmpaque(),
      Producto: this.addProducto(),
      Terminales: this.addTerminales(),
    })
  }


  
  sendForm() {
    console.log(this.form, this.toppingSelected, this.toppingSelectedE, this.EmpaqueSelected, this.ProductoSelected, this.TerminalesSelected); 
  }

}

