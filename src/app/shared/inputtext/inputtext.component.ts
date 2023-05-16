import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.scss']
})
export class InputtextComponent {
valor:any

@Input('valor')

validacao(value:any){
  this.valor = value
    if(!this.valor){
      //Mensageria
    }
  }
}
