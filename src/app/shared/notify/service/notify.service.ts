import { Injectable, Inject ,Optional} from "@angular/core";
import { Notificacao } from "./Inotify";


@Injectable({
  providedIn: 'root'
})
export class NotifyService{

  //ARRAY DE NOTIFICAÇÕES
  notificacoes:Array<Notificacao> = [];


  //Construtor builda o titulo inhhetando
  constructor(@Inject('ttlDefault') @Optional()
  private ttlDefault:number){
    this.ttlDefault = ttlDefault || 3000
  }

  notificar(notificacao:Notificacao){
      notificacao.id = Math.random()
      if(!notificacao.ttl){
        notificacao.ttl = this.ttlDefault
      }

      this.notificacoes.push(notificacao);
      console.log(this.notificacoes);

      setTimeout(() => {
        this.notificacoes.shift()
      },this.ttlDefault
    );
  }

  closeNotify(id:number){
    this.notificacoes.splice(this.notificacoes.findIndex( x => x.id == id),1)
  }
}
