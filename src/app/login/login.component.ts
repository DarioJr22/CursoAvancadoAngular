import { DisplayMessage, GenericValidator, ValidationMessages } from './../shared/models/generic-forms-validators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Utils from '../shared/models/Util/Utils';
import { Mgs } from '../shared/models/Enum/mensagens';
import { LoginService } from './login.service';

@Component({
  selector: 'mv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  formLogin!:FormGroup;
  Utils!:Utils;


  //Mensageria
  validationMessages!:ValidationMessages;
  genericValidator!:GenericValidator;
  displayMessage!:DisplayMessage;

  //Construção do formulário

  formBuild(){
    this.formLogin = this.fb.group({
      login:['',Validators.required,Validators.email],
      senha:['',Validators.required]
    })

    this.validationMessages={
      login:{
        required:Mgs.CAMPO_OBRIGATORIO,
        email:Mgs.EMAIL_INVALIDO
      },
      senha:{
        required:Mgs.CAMPO_OBRIGATORIO,

      }
    }


    this.genericValidator = new GenericValidator(this.validationMessages)
    this.displayMessage = this.genericValidator.processarMensagens(this.formLogin)
  }

  //Instanciamento das camadas do formulário

  //Login
  get login(){return Utils.convertToFormControl(this.formLogin.get('login'))}

  getLogin(){this.getValidations()
    console.log(this.displayMessage);

    this.displayMessage}

  //Senha

  get senha(){
    return Utils.convertToFormControl(this.formLogin.get('senha'))
  }

  getPassword(){this.getValidations()}

  constructor(
    private fb: FormBuilder,
    private loginService:LoginService){}

  ngOnInit(): void {
   this.formBuild()
  }

  getValidations(){
    this.displayMessage = this.genericValidator.processarMensagens(this.formLogin)
  }

  loginUser(){
    this.login
  }
}
