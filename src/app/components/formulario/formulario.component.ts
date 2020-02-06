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

  constructor() { }

  ngOnInit() {
  }

}

