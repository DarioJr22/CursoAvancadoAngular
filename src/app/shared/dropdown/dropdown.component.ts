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
  forwardRef,
  AfterViewInit,
  HostListener,
  Directive,
} from '@angular/core';
import { ValueField } from '../models/interfaces/value-fields';
import Utils from '../models/Util/Utils';
import { Mgs } from '../models/Enum/mensagens';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, FormControlName, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { State } from '../models/Enum/state';
import { state } from '@angular/animations';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>DropdownComponent),
      multi:true



    }
  ]

})
export class DropdownComponent implements OnInit {

  @Input() nameField!:string;
  @Input() list:ValueField[] = [];
  @Input() mensagem:MgsCampos = { mensagem:'', mensageTipo:''};
  @Output() selected:EventEmitter<ValueField> = new EventEmitter<ValueField>()
  @ViewChild('select') select!:MatSelect;
  @HostListener('focusout', ['$event'])
  validaCampos(event:any){
  if (!Utils.validaValoresNulos(this.select.value)) {
    this.mensagem.mensagem = Mgs.CAMPO_OBRIGATORIO
    this.mensagem.mensageTipo = State.ERRO

  }else{
    this.mensagem.mensagem = Mgs.CAMPO_VALIDO
    this.mensagem.mensageTipo = State.SUCSESS


  }

  console.log(this.mensagem);

    /*
    this.utils.(event) */
  }

  constructor(private utils:Utils,
    private fb:FormBuilder) { }


  ngOnInit(): void {

  }






  selectItem(i:ValueField){
    this.selected.emit(i)
  }









}
