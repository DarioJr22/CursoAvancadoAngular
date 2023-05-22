import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Produto } from 'src/app/shared/models/interfaces/produtos-pexels';

@Component({
  selector: 'app-card-detalhe',
  templateUrl: './card-detalhe.component.html',
  styleUrls: ['./card-detalhe.component.scss']
})
export class CardDetalheComponent {
  
  @Input()produto!:Produto[];
  @Output()status:EventEmitter<any> = new EventEmitter();

  emitirEvento(id:number){
    console.log(this.produto);
    this.status.emit(id)
  }

  

  
  
}
