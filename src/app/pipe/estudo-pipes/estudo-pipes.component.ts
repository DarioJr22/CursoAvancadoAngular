import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NotificacaoType } from './../../shared/notify/service/Inotify';
import { NotifyService } from 'src/app/shared/notify/service/notify.service';
import { DataSource } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EstudoPipesService } from './service/estudo-pipes.service';
import { Mgs } from 'src/app/shared/models/Enum/mensagens';
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/app/shared/models/generic-forms-validators';
import Utils from 'src/app/shared/models/Util/Utils';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Pageable } from 'src/app/shared/models/pageable';
import { ApiReturn, MvTableDataSource } from './service/mv-table-datasource';
import { set } from 'cypress/types/lodash';

@Component({
  selector: 'mv-estudo-pipes',
  templateUrl: './estudo-pipes.component.html',
  styleUrls: ['./estudo-pipes.component.scss']
})
export class EstudoPipesComponent implements OnInit{

  // Implementar um datatable com paginação e filtro por pesquisa.

  //Implementação de MatTable.
  //1º - Devida importação nos módulos que ultilizarão;
  //2º - Definição de variáveis que serão utilizadas no componente;
  //   - paginator, table, sort (Elementos do material para preenchimento dos atributos)
  //   - dataSouce, classe instânciada para tratamento dos dados vindos do serviço.
  //3º - Definição de funçãp que serão utilizadas no componente;
  //   - DataSource.getData()
  //4º - Definição da estrutura html que será utilizada no componente;
  //   - Estrutura definida no estudo-pipes.component.html
  //5º - Definição da estrutura de Dados á ser utilizada no serviço.
  //   - (ApiReturn)
  //6º - Link da instância do componente com os dados da classe da tabela (MvTableDataSource)
  //   - ngAfterViewInit -> (MatTable.datasource = data)

  displayedColumns = ['id', 'title', 'url', 'thumbnailUrl','dineiro','tamain'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ApiReturn>
  dataSource: MvTableDataSource = new MvTableDataSource(this.jsonService);

  //form
  formPipes!:FormGroup;
  dataDeHoje:Date = new Date();

  //Mensageria
  validationMessages!:any;
  genericValidator!:GenericValidator;
  displayMessage!:DisplayMessage;




  constructor(
    private fb:FormBuilder,
    private jsonService:EstudoPipesService,
    private NotifyService:NotifyService){

    }

    ngAfterViewInit(): void {


   setTimeout(() => {
    console.log('Sort',this.sort);
    console.log('Paginação',this.paginator);
    console.log('dataSource',this.dataSource);

    this.table.dataSource = this.dataSource;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
   },5000)


  }



  ngOnInit(): void {
    this.formBuild()

  }


  formBuild(){

    this.formPipes = this.fb.group({
      nome:['',Validators.required],
      email:['',Validators.required],
      telefone:['',Validators.required],
      dataNascimento:['',Validators.required]
    })

    this.validationMessages = {
        nome:{
          required: Mgs.CAMPO_OBRIGATORIO
        },
        email:{
          required:Mgs.CAMPO_OBRIGATORIO
        },
        telefone:{
          required:Mgs.CAMPO_OBRIGATORIO
        },
        dataNascimento:{
          required:Mgs.CAMPO_OBRIGATORIO
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

  filtro:FormControl = new FormControl();

  applyFilter(event: Event) {
  /*   const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    } */
  }





  getValidations(){
    this.displayMessage = this.genericValidator.processarMensagens(this.formPipes);
  }

  submit(){
    let notify = {mensagem:JSON.stringify(this.formPipes.value),tipo:NotificacaoType.SUCESSO}
    this.NotifyService.notificar(notify)
  }


}
