import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-rxjs-obs',
  templateUrl: './rxjs-obs.component.html',
  styleUrls: ['./rxjs-obs.component.scss']
})
export class RxjsObsComponent implements OnInit{
/* 

Onde paramos: Aula 04 - Modulo 02 - 

_________________________________

- Estrutura de uma promisse consiste em uma chamada passando uma objeto de algum tipo, 
podendo ser inclusive um objeto que você tipou.

- Use: 'then' para pegar o resultado positivo com uma callback functions

- Use: 'catch' para pegar os erros após o then.
 

----------------------------

- Estrutura de uma Promisse consiste em utilizar etapas de consumo da subscription. Por meio dos argumentos:
Processador de argumentos de uma Observable.
Observer = {
  
  next: Próxima instrução que será consumida ou utilizada.
  error: Caso venha á dar algum erro na subscrição
  complete: Quando essa subscrição estiver comleta, faça algo.

}

- Pode ser utilizado o argumento unsubscribe para cancelar a chamada da observable. 
- Pode-se também utilizar o atributo booleano closed para verifcar se a observable foi encerrada a ou não. 



*/

ngOnInit(): void {
  /*   this.minhaPrimeiraPromise(' Dário')
    .then( result =>console.log(result))
    .catch(error=> console.log(error))
 */
    const observer = { 
      next: (result:any) => {console.log(result)},
      error: (result:any) => {console.log(result)},
      complete:() => {console.log('Fim');
      }

    }
  /*   this.minhaPrimeiraObservable('Eloy').subscribe( 
      observer
    ) */
   let obs = this.userObservable('Admin','Adimin@admin.com')
   let subs = obs.subscribe(observer)

   setTimeout(()=>{
    subs.unsubscribe()
    console.log(subs.closed ? 'Conexão fechada' : 'Conexão aberta');
    
   },2000)
    
}


minhaPrimeiraPromise(nome:string):Promise<string>{
  return new Promise((result,reject)=>{
    if (nome ===' Dário') {      
      setTimeout(() => {
        result('Eai' + nome)
      }, 1000);
    }else{
      reject('Você não é o meu cara')
        }
      }
    )
  }

  minhaPrimeiraObservable(nome:string):Observable<string>{
    return new Observable(subscriber => {

          if (nome === 'Dário') {
            subscriber.next('Olá !' + nome)   
          }else{
            subscriber.error('Erro ! ')
          }
         
        }
      )
    }
  

    userObservable(
      nome:string,
      email:string
    ):Observable<Usuario>{
      return new Observable(subscriber=>{
        let usuario = new Usuario(nome,email)
      
        if (usuario.nome == 'Admin') {
        
          setTimeout(()=>{
            subscriber.next(usuario)
          },1000)

          setTimeout(()=>{
            subscriber.next(usuario)
          },2000)

          setTimeout(()=>{
            subscriber.next(usuario)
          },3000)

          setTimeout(()=>{
            subscriber.next(usuario)
          },4000)

          setTimeout(()=>{
            subscriber.complete()
          },5000)
        
      }else{
          subscriber.error('Erro demaize')
      }
      })
    }



}


export class Usuario {
  constructor(
    nome:string,
    email:string
    ) {
      this.nome = nome
      this.email = email
  }
  nome:string;
  email:string
}