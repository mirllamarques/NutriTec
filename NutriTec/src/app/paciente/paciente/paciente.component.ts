import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent{

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElements);
  }

}

@Component({
  selector: 'dialog-element',
  templateUrl: './dialog-element.html',
})
export class DialogElements {}
