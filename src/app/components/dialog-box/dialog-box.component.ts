import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; 

export interface user {
  Maximopicopositivo: string;
  Minimopiconegativo: string;
  pulsemiciclo: string;
  pulciclo: string; 
  ton: string;
  toff: string;
}
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  Actions:string;
  local_data: any; 

  
  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: user) { console.log(data);
      this.local_data = {...data};
      this.Actions = this.local_data.Actions;
    }

    doActions(){
      this.dialogRef.close({event:this.Actions, data: this.local_data}); 
    }
   
    closeDialog(){
      this.dialogRef.close({event:'Cancel'}); 
    }

    

  ngOnInit() {
  }

}
