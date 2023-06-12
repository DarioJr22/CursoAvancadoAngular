import { DisplayMessage, GenericValidator, ValidationMessages } from './../../shared/models/generic-forms-validators';
import { Component, ElementRef, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { ProdutoDashboardService } from '../produto-dashboard/produto-dashboard.service';
import { Produto } from 'src/app/shared/models/interfaces/produtos-pexels';
import { ValueField } from 'src/app/shared/models/interfaces/value-fields';
import { Mgs } from 'src/app/shared/models/Enum/mensagens';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators, ControlValueAccessor, AbstractControl } from '@angular/forms';
import { Observable, merge,fromEvent } from 'rxjs';
import { DropdownComponent } from 'src/app/shared/dropdown/dropdown.component';
import Utils from 'src/app/shared/models/Util/Utils';
import { MgsCampos } from 'src/app/shared/models/interfaces/mensagensCampos';
import { State } from 'src/app/shared/models/Enum/state';

@Component({
  selector: 'app-lib-component',
  templateUrl: './lib-component.component.html',
  styleUrls: ['./lib-component.component.scss']
})
export class LibComponentComponent implements OnInit {
  lista:ValueField[] = [];
  form!:FormGroup;
  Utils!:Utils
  colorPrefers = localStorage.getItem('colorScheme')

  //Mensageria
  validationMessages!:ValidationMessages;
  genericValidator!:GenericValidator;
  displayMessage!:DisplayMessage;


  //Mensagem por campo



  formBuild(){
    this.form = this.fb.group({
      dropdownComum:['',[Validators.required]],
      dropdownMult:['',[Validators.required]],
      inputNumberComum:['',[Validators.required,Validators.minLength(4)]],
      textareaComum:['',[Validators.required,Validators.maxLength(23)]],
      inputTextComum:['',[Validators.required,Validators.email]],

    })

    //1 º - Mensagem por validação
    this.validationMessages = {
      dropdownComum:{
        required: Mgs.CAMPO_OBRIGATORIO,
      },
      dropdownMult:{
        required:Mgs.CAMPO_OBRIGATORIO
      },
      inputNumberComum:{
        required:Mgs.CAMPO_OBRIGATORIO,
        minLength:Mgs.MIN_LENGTH
      },
      textareaComum:{
        required:Mgs.CAMPO_OBRIGATORIO,
        maxLength:Mgs.MAX_LENGTH
      },
      inputTextComum:{
        required:Mgs.CAMPO_OBRIGATORIO,
        email:Mgs.EMAIL_INVALIDO
      },

    }
    //2º - Validação por campo
    this.genericValidator = new GenericValidator(this.validationMessages);
    this.displayMessage = this.genericValidator.processarMensagens(this.form)

  }



  ngOnInit(): void {
    this.formBuild();
    this.getProdutos();
    console.log(this.colorPrefers);

  }






  getProdutos(){
    this.pexelService.getImages('Brazil',10).subscribe({
      next: (res:any) => {
        res.photos.forEach((element: Produto) => {
          this.lista.push({
            value: element.id,
            label: element.alt
          })
        })
      },
      error: (err:any) => {

      },
      complete: ()=>{


      }
    })


  }



  constructor(private pexelService:ProdutoDashboardService,
    private fb:FormBuilder
    ) { }

    //$====== Dropdown ======$
      get dropDown(){
        return Utils.convertToFormControl(this.form.get('dropdownComum'));
      }

      //GetDropdown Value
        getDropDownValue() {this.getValidations()}


      //$====== InputNumber ======$
      get inputNumber(){
        return Utils.convertToFormControl(this.form.get('inputNumberComum'));
      }

      //GetInputNumber Value
      getInputNumberValue() {this.getValidations()}

    //$====== InputText ======$
      get inputText(){
        return Utils.convertToFormControl(this.form.get('inputTextComum'));
      }

      //GetInputText Value
      getInputTextValue() {this.getValidations()}
    //$====== TextArea // Falta configurar ======$

    get textarea(){
      return Utils.convertToFormControl(this.form.get('textareaComum'));
    }

    //GetInputTextArea Value
   /*  getinputTextAreaValue() {
      this.displayMessage = this.genericValidator.processarMensagens(this.form)
      this.msg['textareaComum'] = this.getValidations(this.displayMessage['textareaComum'],'textareaComum',State.ERRO)

    } */


    //$====== Dropdown Multi Valorado ======$

    get DropdownMultiValorado(){
      return Utils.convertToFormControl(this.form.get('dropdownMult'));
    }

    //GetDropdownMultiValorado Value
    getDropdownMultiValoradoValue() {
      this.getValidations()
    }

















    //Validações

    getValidations(){
      this.displayMessage = this.genericValidator.processarMensagens(this.form)
    }



}
