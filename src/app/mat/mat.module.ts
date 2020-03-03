import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatDividerModule,
  MatTooltipModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSliderModule,
  MatListModule,
  MatExpansionModule,
  MatIconModule,
  MatTableModule,
  MatDialogModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSliderModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule
    
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatTooltipModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSliderModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class MatModule { }
