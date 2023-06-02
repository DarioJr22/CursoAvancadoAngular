import { FormControl } from '@angular/forms';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, ControlValueAccessor, Validator } from '@angular/forms';
import { Component, Input, OnInit, Output, forwardRef,EventEmitter } from '@angular/core';
import { ValueField } from '../models/interfaces/value-fields';
import { MgsCampos } from '../models/interfaces/mensagensCampos';

@Component({
  selector: 'app-inputnumber',
  templateUrl: './inputnumber.component.html',
  styleUrls: ['./inputnumber.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>InputnumberComponent),
      multi:true
    },
    {
      provide:NG_VALIDATORS,
      useExisting:forwardRef(()=>InputnumberComponent),
      multi:true
    }


  ]
})
export class InputnumberComponent implements OnInit,ControlValueAccessor,Validator {


//Valores iniciais
@Input() initialValue:ValueField = {value:'',label:'' };
@Input() nameField!:string;

//Mensagens
@Input() mensagem:MgsCampos = {mensagem:'',mensagemTipo:''};


//Estado do componente
@Input() disab:boolean = false;

//formControl
@Input() control:FormControl = new FormControl(this.initialValue)


//Output de dados do componente
@Output() selected:EventEmitter<any> = new EventEmitter();


  //Update the model before initilize
  ngOnInit(): void {
  }


  //Recieve values when the model changes
  onChange = (value:any) => {


   }


  //Recieve touch when the model is touched
  onTouched = (value:any) => {

  }


  //Register
  registerOnValidatorChange?(fn: () => void): void {
    this.onTouched = fn
  }

  writeValue(obj: any): void {
    this.control.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe(fn);
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disab ? this.control.disable({onlySelf:true}) : this.control.enable({onlySelf:true})
   }

  validate(c: any): any {}

  emitItem(e:any){
    this.selected.emit(e);
  }

}




