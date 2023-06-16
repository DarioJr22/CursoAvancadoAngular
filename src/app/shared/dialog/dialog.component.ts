import { TestBed } from '@angular/core/testing';
import { Component, EventEmitter, Output ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'mv-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(
    public dialogRef:MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

    _OnclickYes(){
      console.log(this.data);

      this.dialogRef.close(true)
    }

    _OnclickNo(): void {
      this.dialogRef.close(false);
    }
}
