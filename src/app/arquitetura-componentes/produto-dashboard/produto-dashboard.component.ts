import { AfterViewInit, Component,ElementRef,OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ProdutoDashboardService } from './produto-dashboard.service';
import { Produto } from 'src/app/shared/models/interfaces/produtos-pexels';
import { Observable, fromEvent } from 'rxjs';
import { CardDetalheComponent } from 'src/app/componente/card-detalhe/card-detalhe.component';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styleUrls: ['./produto-dashboard.component.scss']
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit{
  items:any
  @ViewChild( ProdutoDashboardComponent,{static:true}) contador!:ProdutoDashboardComponent
  @ViewChild('teste',{static:true}) mensagemTela!:ElementRef

  @ViewChildren(CardDetalheComponent) botoes!: QueryList<CardDetalheComponent>
  constructor(private produtoService:ProdutoDashboardService){}

  ngAfterViewInit(): void {
    
    let click:Observable<any> = fromEvent(this.mensagemTela.nativeElement,'click');
    click.subscribe(()=>{
      alert("Click na tela")
      return;
    })

    console.log(this.botoes);
    this.botoes.forEach(p => {
      console.log(p.produto);
      
    })
    
  }

  hadlerImages(obj:any){

    obj.photos.forEach((element:any) => {
      this.items.push(element.src.medium)
    });
    console.log(this.items);
    
  }

  ngOnInit(): void {
    this.produtoService.getImages('mobile',100).subscribe({
      next:(a:any)=>{
         this.items = a.photos
        },
      error:(err:any)=>{
        console.log(err);
        
      },
      complete:()=>{
        console.log('FINISH !');
        
      }
      }
    )
  }

  darLike(idProd:number){
    this.items.forEach( (a:any) => {
        a.id == idProd ? 
        a.liked = !a.liked : 
        a.liked = a.liked 
      }
    )
  }





}
