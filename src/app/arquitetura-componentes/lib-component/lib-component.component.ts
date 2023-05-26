import { DisplayMessage, GenericValidator, ValidationMessages } from './../../shared/models/generic-forms-validators';
import { Component, ElementRef, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { ProdutoDashboardService } from '../produto-dashboard/produto-dashboard.service';
import { Produto } from 'src/app/shared/models/interfaces/produtos-pexels';
import { ValueField } from 'src/app/shared/models/interfaces/value-fields';
import { Mgs } from 'src/app/shared/models/Enum/mensagens';
import { FormBuilder,FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Observable, merge,fromEvent } from 'rxjs';

@Component({
  selector: 'app-lib-component',
  templateUrl: './lib-component.component.html',
  styleUrls: ['./lib-component.component.scss']
})
export class LibComponentComponent implements OnInit {
  lista:ValueField[] = [];
  form!:FormGroup;

  //Fazendo uma lista com os inputs contidos no meu componente.
  //Pendência -> Lógica de implementação do reactiveforms.
 /*  @ViewChildren(FormControl, { read: ElementRef }) formInputElements: ElementRef[]=[];

  ngAfterViewInit(): void {
    let controlBlurs:Observable<any>[] = this.formInputElements.map((formControl:ElementRef) => fromEvent(formControl.nativeElement,'blur'));
  console.log(controlBlurs);

  merge(...controlBlurs).subscribe(()=>{
    this.display = this.genericValidators.processarMensagens(this.form);
  })
  console.log(this.display)

  } */



  formBuild(){
    this.form = this.fb.group({
      dropdownComum:['',Validators.required]
    })
  }

  ValidationMessages:ValidationMessages ={
    dropdownComum:{
      required:Mgs.CAMPO_OBRIGATORIO,
      minLength:Mgs.CAMPO_INVALID
    }
  }
  genericValidators!:GenericValidator;
  display:DisplayMessage = {};

  ngOnInit(): void {
    this.getProdutos();
    this.formBuild();
    this.genericValidators = new GenericValidator(this.ValidationMessages);
  }

teste(){
  console.log(this.display);
  console.log(this.dropDown);
 console.log(this.form.controls);
}

get dropDown(){
  return this.form.get('dropdownComum');
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
        console.log(err);
      },
      complete: ()=>{
        console.log(this.lista);

      }
    })


  }



  constructor(private pexelService:ProdutoDashboardService,
    private fb:FormBuilder
    ) { }


  return!:any
  getSelecaoDrop(event: any) {
    this.return = JSON.stringify(event);
    console.log(event);
  }

}
