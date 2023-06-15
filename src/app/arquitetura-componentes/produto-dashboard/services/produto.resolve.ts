import { Inject } from '@angular/core';
import { ProdutoDashboardService } from './../produto-dashboard.service';
import { ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from "@angular/router";
import { Observable ,filter} from "rxjs";
import { indexOf } from 'cypress/types/lodash';




/*
  resolve é um método que é chamado quando a rota é ativada, ele pode ser usado para buscar dados
  1º - Elaborar uma função que retorne o parâmetro desejado
    - Injetar serviço que será utilizado
    - Chamar método necessário para realizar a lógica do processo
  2º - Chamar esse resolve dentro da rota que será utilizada.
  3° - Usar o resolve no componente que será utilizado.
    - Fazer chamada usando o this.route.data.pipe(map(({ post }) => post)) ou this.route.snapshot.data['post'];
*/


export const ProdutoResolve:ResolveFn<any[]> = (
  route:ActivatedRouteSnapshot,
  state:RouterStateSnapshot,
  service:ProdutoDashboardService = Inject(ProdutoDashboardService)
  ):Observable<any> => service.getImageByid(route.paramMap.get('id')).pipe(filter(x=>x!=null))
