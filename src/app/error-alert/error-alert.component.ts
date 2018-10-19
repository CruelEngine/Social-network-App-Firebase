import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.scss']
})
export class ErrorAlertComponent implements OnInit {

  constructor( private _matDialogRef : MatDialogRef<ErrorAlertComponent> , @Inject(MAT_DIALOG_DATA) private errorMessage : any ) { }

  ngOnInit() {
  }

  close(){
    this._matDialogRef.close();
  }

}
