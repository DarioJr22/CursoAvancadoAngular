import { DisplayMessage, GenericValidator, ValidationMessages } from './../shared/models/generic-forms-validators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Utils from '../shared/models/Util/Utils';
import { Mgs } from '../shared/models/Enum/mensagens';
import { LoginService } from './login.service';
import { NotifyService } from '../shared/notify/service/notify.service';
import { Router } from '@angular/router';
import { NotificacaoType } from '../shared/notify/service/Inotify';
import { set } from 'cypress/types/lodash';

@Component({
  selector: 'mv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[ ]

})
export class LoginComponent implements OnInit{
  formLogin!:FormGroup;
  Utils!:Utils;


  //Mensageria
  validationMessages!:ValidationMessages;
  genericValidator!:GenericValidator;
  displayMessage!:DisplayMessage;


  //Construtor do compoente

  constructor(private fb: FormBuilder,
    private loginService:LoginService,
    private notify:NotifyService,
    private router:Router)
  {

  }

  //Construção do formulário

  formBuild(){
    this.formLogin = this.fb.group({
      login:['',Validators.required],
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



  ngOnInit(): void {
   this.formBuild()
  }

  getValidations(){
    this.displayMessage = this.genericValidator.processarMensagens(this.formLogin)
  }

  loginUser(){
    const notificacaoErro = {mensagem:Mgs.ERRO_LOGIN,tipo:NotificacaoType.ERRO}
    this.loginService.getLogin(this.login.value,this.senha.value) ? this.logar() : this.notify.notificar(notificacaoErro)
  }


  logar(){
    const notificacaoSucesso = {mensagem:Mgs.SUCESSO,tipo:NotificacaoType.SUCESSO}
    this.notify.notificar(notificacaoSucesso)
    setTimeout(() => {
      this.router.navigate(['/reactiveForms'])
    }, 3000)
  }
}
