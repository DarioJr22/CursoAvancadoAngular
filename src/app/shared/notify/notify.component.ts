import { Component, OnInit } from "@angular/core";
import { NotifyService } from "./service/notify.service";


@Component({
  selector:'mv-notify',
  templateUrl:'./notify.component.html',
   styleUrls:['./notify.component.scss']
})

export class NotifyComponent {
  //Criação do componente de notificação

  //1º - Definição de um componente de notificação
  //2º - Criação de interface e Enum de notificação
  //3º - Criação do serviço como no  ./service/notify.service
  //4º - Criação de módulo individual para gestão da entidade
  //5º - Importação do módulo que ultilizará a notificação necessária.
  //6º - Chamada do método em formato de serviço. (notificar)
  notificacoes:any = []
  constructor( private notificacoesService:NotifyService){
    this.notificacoes = notificacoesService.notificacoes;
  }

  close(n:number,tipo:HTMLElement){
  //Animation reverse para fechar a notificação - Ainda não resolvido
   tipo.style.cssText = 'animation-direction: reverse';
   //Fecha a notificação
   this.notificacoesService.closeNotify(n)
  }

}
