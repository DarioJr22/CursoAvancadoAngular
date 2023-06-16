import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NotificacaoType } from './../../shared/notify/service/Inotify';
import { NotifyService } from 'src/app/shared/notify/service/notify.service';
import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { EstudoPipesService } from './service/estudo-pipes.service';
import { Mgs } from 'src/app/shared/models/Enum/mensagens';
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/app/shared/models/generic-forms-validators';
import Utils from 'src/app/shared/models/Util/Utils';

@Component({
  selector: 'mv-estudo-pipes',
  templateUrl: './estudo-pipes.component.html',
  styleUrls: ['./estudo-pipes.component.scss']
})
export class EstudoPipesComponent implements OnInit{


  //data table
  displayedColumns = ['id', 'title', 'url', 'thumbnailUrl'];

  //form
  formPipes!:FormGroup;
  dataDeHoje:Date = new Date();

   //Mensageria
   validationMessages!:ValidationMessages;
   genericValidator!:GenericValidator;
   displayMessage!:DisplayMessage;


  dataSource:any;

  constructor(
    private fb:FormBuilder,
    private jsonService:EstudoPipesService,
    private NotifyService:NotifyService){}

  ngOnInit(): void {
    this.formBuild()
    this.getPipeData();



  }


  formBuild(){

    this.formPipes = this.fb.group({
      nome:[''],
      email:[''],
      telefone:[''],
      dataNascimento:['']
    })

    this.validationMessages = {
        nome:{
          required:'Nome é obrigatário'
        },
        email:{
          required:'Email é obrigatário'
        },
        telefone:{
          required:'Telefone é obrigatário'
        },
        endereco:{
          required:'Endereço é obrigatário'
        }
      }
       //2º - Validação por campo
    this.genericValidator = new GenericValidator(this.validationMessages);
    this.displayMessage = this.genericValidator.processarMensagens(this.formPipes)
    }

    get nome(){
      return Utils.convertToFormControl(this.formPipes.get('nome'))
    }

    get email(){
      return Utils.convertToFormControl(this.formPipes.get('email'))
    }

    get telefone(){
      return Utils.convertToFormControl(this.formPipes.get('telefone'))
    }

    get dataNascimento(){
      return Utils.convertToFormControl(this.formPipes.get('dataNascimento'))
    }


  getPipeData(){
    this.jsonService.getPhotos().subscribe({
      next:(data:any)=>{
        this.dataSource = data;
      },
      error:(err)=>{
        const notfy = {mensagem:Mgs.ERRO_LOGIN,tipo:NotificacaoType.ERRO}
        this.NotifyService.notificar(notfy)
      },
      complete:()=>{
        const notfy = {mensagem:'Requisição finalizada',tipo:NotificacaoType.ERRO}
        this.NotifyService.notificar(notfy)
        }
      }
    )
  }

  filtro:FormControl = new FormControl();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  getValidations(){
    this.displayMessage = this.genericValidator.processarMensagens(this.formPipes);
  }

  submit(){
    let notify = {mensagem:JSON.stringify(this.formPipes.value),tipo:NotificacaoType.SUCESSO}
    this.NotifyService.notificar(notify)
  }


}
