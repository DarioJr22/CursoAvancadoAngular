import { Component,Input } from '@angular/core';

@Component({
  selector: 'mv-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MensagemComponent {

  @Input('mensagem') mensagem:string ='';
  @Input('mensagemTipo') mensagemTipo:string =''



}
