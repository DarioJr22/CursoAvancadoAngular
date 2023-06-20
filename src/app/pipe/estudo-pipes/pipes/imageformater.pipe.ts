import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name:'imageFormater'
})

export class ImageFormaterPipe implements PipeTransform{
  transform(str:string,caminho:string,substituir:boolean){
    if(caminho == 'default'){
      caminho = 'assets';
    }
  }
}
