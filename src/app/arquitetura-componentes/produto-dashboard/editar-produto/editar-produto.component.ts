import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoDashboardService } from '../produto-dashboard.service';
import { NotifyService } from '../../../shared/notify/service/notify.service';
import { NotificacaoType } from '../../../shared/notify/service/Inotify';
import { Mgs } from 'src/app/shared/models/Enum/mensagens';
import { map, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { set } from 'cypress/types/lodash';

@Component({
  selector: 'mv-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.scss']
})
export class EditarProdutoComponent  implements OnInit{

  produto:any
  constructor(
    private route:ActivatedRoute,
    private produtoService:ProdutoDashboardService,
    private router:Router,
    private notify:NotifyService,
    private dialog:MatDialog){}


  ngOnInit(): void {
    this.route.params.subscribe({
      next:(data)=>{
        this.getImagesById(data['id'])
        }
      }
    )

    console.log(this.route.data.pipe(map(({ produto }) => produto)));
    console.log('testeeREEEEEEEEEEEEEEEE',this.route.snapshot.data['teste']);

  }



  getImagesById(id:any){
    this.produtoService.getImageByid(id).subscribe({
      next:(data)=>{
       this.handlerProduct(data);
      },
      error:(error)=>{
          console.log(error);
        }
      }
    )
  }

  handlerProduct(dados:any){
    this.produto = {
      name:dados.alt,
      fotografo:dados.photographer,
      imagem:dados.src.medium
    }
  }

  backProdutos(){
    const notfication = {mensagem:Mgs.SUCESSO,tipo:NotificacaoType.SUCESSO}
    this.notify.notificar(notfication)
    setTimeout(() => {this.router.navigate(['/produtos'])}, 3000);
  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogComponent,{
      data:{
            title:'Atenção',
            content:'Deseja realmente editar este produto'
          }
        }
      )

      dialogRef.afterClosed().subscribe( result => {
        result ? this.backProdutos() : null
      })
    }

}
