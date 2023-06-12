import { Component, OnInit } from '@angular/core';
import { VERSAO } from 'src/app/app.init';

@Component({
  selector: 'mv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {
VERSAO:string = VERSAO
  getDataAtual(){
    let data = new Date()
    return data
  }
}
