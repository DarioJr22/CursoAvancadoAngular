import { MgsCampos } from './../models/interfaces/mensagensCampos';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  forwardRef,
} from '@angular/core';
import { ValueField } from '../models/interfaces/value-fields';
import Utils from '../models/Util/Utils';
import { Mgs } from '../models/Enum/mensagens';
import { AbstractControl,Validator, ControlValueAccessor, FormBuilder, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { State } from '../models/Enum/state';
import { DisplayMessage, GenericValidator } from '../models/generic-forms-validators';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>DropdownComponent),
      multi:true
    },
    {
      provide:NG_VALIDATORS,
      useExisting:forwardRef(()=>DropdownComponent),
      multi:true
    }
  ]

})
export class DropdownComponent implements OnInit,ControlValueAccessor,Validator {

  //Input de dados do componente

  //Valores iniciais
  @Input() initialValue:ValueField = {value:'',label:''}
  @Input() nameField!:string;
  @Input() mutiplo:boolean = false;

  //Lista de dados que serão exibidos no dropdown
  @Input() list:ValueField[] = [];

  //Mensagens
  @Input() mensagem:MgsCampos = { mensagem:'',mensagemTipo:''};

  //Estado do componente
  @Input() disab:boolean = false

  //formControl
  @Input() control:FormControl = new FormControl<ValueField>(this.initialValue)



  //OutPut de dados do componente
  @Output() selected:EventEmitter<ValueField> = new EventEmitter<ValueField>()


  constructor() { }

  //Function to be called when any changes ocurrs on component
  onChange = ( value:ValueField) => {


  }
  handleDataChange(event:any){
    const dataSelected = event;
    console.log(this.mensagem);
   /*  this.onChange(dataSelected) */
    this.selected.emit(dataSelected)
  }




  //Function to be called when the component get touched
  onTouched = () => {}


  // Allows Angular to update the model .
  // Update the model and changes needed for the view here.
  writeValue(obj: any): void {
  this.control.setValue(obj);
  }

  // Allows Angular to register a function to call when the model  changes.
  // Save the function as a property to call later here.
  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe(fn)
    this.onChange = fn
  }

  // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState?(): void {
    this.disab ? this.control.disable({onlySelf:true}) : this.control.enable({onlySelf:true})
  }

  validate(c: AbstractControl){


   return c.errors
  }




  ngOnInit(): void {

  }






  selectItem(i:ValueField){
   /*  this.onChange(i) */
  }










}
