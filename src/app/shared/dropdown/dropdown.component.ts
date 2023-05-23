import { MgsCampos } from './../models/interfaces/mensagensCampos';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ElementRef,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DropDownValue } from './dropdown-value';
import Utils from '../models/Util/Utils';
import { Mgs } from '../models/Enum/mensagens';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {

  @Input() nameField!:string
  @Input() list:DropDownValue[] = []
  @Output() selected:EventEmitter<DropDownValue> = new EventEmitter<DropDownValue>()
  @ViewChild('input') input!:ElementRef

  selectItem(i:DropDownValue){
    this.selected.emit(i)
  }






}
