import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup , FormBuilder,Validators} from '@angular/forms'
import { Usuario } from './../../models/usuario';
import { NgBrazilValidators } from 'ng-brazil/lib.module';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  registroForm!: FormGroup
  usuario!:Usuario


  /*
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

  }


  ngOnInit(): void {
      this.registroForm = this.fb.group({
        nome: ['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        cpf:['',[Validators.required, NgBrazilValidators.cpf]],
        senha:['']       
      })
  }

  addUser(){
    this.usuario = new Usuario()
    this.registroForm.valid ?  
    Object.assign(this.usuario,this.registroForm.value) &&
    alert(JSON.stringify(this.usuario)) :  
    alert('Formulário inválido')
   
    
  }
}
