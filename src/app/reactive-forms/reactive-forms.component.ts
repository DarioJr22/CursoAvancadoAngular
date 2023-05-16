import { Component,OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { FormControl, FormGroup , FormBuilder,Validators, FormControlName} from '@angular/forms'
import { Usuario } from './../../models/usuario';
import { CustomValidators } from 'ng2-validation';
import { DisplayMessage, GenericValidator, ValidationMessages } from '../shared/models/generic-forms-validators';
import { Observable, fromEvent, merge } from 'rxjs';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit,AfterViewInit {
  registroForm!: FormGroup
  usuario!:Usuario


  @ViewChildren(FormControlName,{read:ElementRef}) formInputElements:ElementRef[] = []
  validationMessages!:ValidationMessages;
  genericValidators!:GenericValidator;
  displayMessage:DisplayMessage = {};







  /*

  Paramos na aula 7 aos 2:22


  1 - Utilizando FormGroup:

    Para lidar com um grupo de valores de Input. Você deve utilizar o Form Group.
    FormControls são fragmentos de um formGroup. 
    Essas entidades são utilizadas para lidar com formulários em angular de forma 'reativa'

  2 - Adicionando FormBuilder: 

    Use FormBuilder para chamar seus grupos de formulários e formArrays.

  3 - Adicione Validadores ao seu formulário utilizando a classe 'Validators'. 

  - Nesta classe você pode vincular validações á campos do seu formulários. 

  4 - Pegue erros de validação com os atributos .errors
  
  - Antes disso vocÊ também consegue validar se o formulário foi tocado ou mechido com os atributos:
    - touched 
    - dirty


    
    
    */
//let nome = new FormControl('Nome do Form COntrol')
  constructor(private fb:FormBuilder){
    this.validationMessages = {
      nome:{
        required:'O nome é obrigatório',
        minLength: 'O nome precisa ter no minimo 2 caracteres',
        maxLength: 'O nome precisa ter no másimo 12 caracteres'
      },
      cpf:{
        required: 'Informe o CPF',
        cpf:'CPF em formato inválido'
      },
      email:{
        required:'Informe o email',
        rangeLength:'A senha deve possuir entre 6 e 15 caractéres'
      },
      senhaConfirmacao:{
        required:'Informe a senha novamente',
        rangeLength:'A senha deve possuir entre 6 e 15 caracteres',
        equalTo:'As senhas não conferem'
      }
    }

  this.genericValidators = new GenericValidator(this.validationMessages);

  }

  ngOnInit(): void {
    let senha = new FormControl('', [Validators.required,CustomValidators.rangeLength([6,15])]);
    let senhaConfirm = new FormControl('', [Validators.required,CustomValidators.rangeLength([6,15]), CustomValidators.equalTo(senha)]);


    this.registroForm = this.fb.group({
      nome: ['',Validators.required], 
      email:['',[Validators.required,Validators.email]],
      cpf:['',[Validators.required]],
      senha:senha,
      senhaConfirm: senhaConfirm 
    
    })
}

  ngAfterViewInit(): void {
    let controlBlurs:Observable<any>[] = 
    this.formInputElements.map((FormControl:ElementRef)=> fromEvent(FormControl.nativeElement,'blur'))
    
    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidators.processarMensagens(this.registroForm)
    })
    console.log(this.displayMessage);
    
  }


 

  addUser(){
    this.usuario = new Usuario()
    this.registroForm.valid ?  
    Object.assign(this.usuario,this.registroForm.value) &&
    alert(JSON.stringify(this.usuario)) :  
    alert('Formulário inválido')
   
    
  }
}
