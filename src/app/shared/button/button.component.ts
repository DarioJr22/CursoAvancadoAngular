import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mv-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Output()_onClick:EventEmitter<any> = new EventEmitter()
  @Input()name!:string


  onClick(): void{
    this._onClick.emit()
  }

}
