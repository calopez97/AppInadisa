import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spiner',
  templateUrl: './progress-spiner.component.html',
  styleUrls: ['./progress-spiner.component.scss']
})
export class ProgressSpinerComponent implements OnInit {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  constructor() { }

  ngOnInit() {
  }

  spinnerShow() {
    document.getElementById('progressSpinner').style.display = 'block';
  }

  spinnerHidden() {
    document.getElementById('progressSpinner').style.display = 'none';
  }

}
