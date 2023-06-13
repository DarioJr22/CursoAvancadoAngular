import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ValueField } from '../models/interfaces/value-fields';
import { MgsCampos } from '../models/interfaces/mensagensCampos';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.scss']
})
export class InputtextComponent {
//Valores iniciais
@Input() initialValue:ValueField = {value:'',label:'' };
@Input() nameField!:string;


@Input() type!:string

//Mensagens
@Input() mensagem:MgsCampos = {mensagem:'',mensagemTipo:''};

//Estado do componente
@Input() disab:boolean = false;

//formControl
@Input() control:FormControl = new FormControl(this.initialValue)

//Output de dados do componente
@Output() selected:EventEmitter<any> = new EventEmitter();



 //Function to be called when any changes ocurrs on component
 onChange = ( value:ValueField) => {}

 handleDataChange(event:any){
   const dataSelected = event;
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



 emitItem(e:any){
  this.selected.emit(e);
}





}
