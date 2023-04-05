import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-obs',
  templateUrl: './rxjs-obs.component.html',
  styleUrls: ['./rxjs-obs.component.scss']
})
export class RxjsObsComponent implements OnInit{
/* 
- Estrutura de uma promisse consiste em uma chamada passando uma objeto de algum tipo, 
podendo ser inclusive um objeto que você tipou.

- Use: 'then' para pegar o resultado positivo com uma callback functions

- Use: 'catch' para pegar os erros após o then.
 


*/

ngOnInit(): void {
    this.minhaPrimeiraPromise(' Dário')
    .then( result =>console.log(result))
    .catch(error=> console.log(error))

    this.minhaPrimeiraObservable('Eloy').subscribe( 
      result => console.log(result),
      erro => console.log(erro)
    )
    
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
  





}
