import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-nutricionista',
  templateUrl: './nutricionista.component.html',
  styleUrls: ['./nutricionista.component.scss']
})
export class NutricionistaComponent{
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElements);
  }
}

@Component({
  selector: 'dialog-element',
  templateUrl: 'dialog-elements.html',
})
export class DialogElements {}
