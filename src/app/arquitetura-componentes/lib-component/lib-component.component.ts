import { Component, OnInit } from '@angular/core';
import { ProdutoDashboardService } from '../produto-dashboard/produto-dashboard.service';
import { Produto } from 'src/app/shared/models/interfaces/produtos-pexels';
import { DropDownValue } from 'src/app/shared/dropdown/dropdown-value';

@Component({
  selector: 'app-lib-component',
  templateUrl: './lib-component.component.html',
  styleUrls: ['./lib-component.component.scss']
})
export class LibComponentComponent implements OnInit {
  lista:DropDownValue[] = [];


  ngOnInit(): void {
    this.getProdutos();
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



  constructor(private pexelService:ProdutoDashboardService) { }


  getSelecaoDrop(event: any) {
    console.log(event);
  }

}
