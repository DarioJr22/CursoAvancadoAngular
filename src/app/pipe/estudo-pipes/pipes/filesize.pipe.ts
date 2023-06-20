import { PipeTransform } from '@angular/core';
import {Pipe } from '@angular/core'

@Pipe({
  name: 'fileSize'
})

export class FileSizePipe implements PipeTransform{
  transform(size:number) {
    let tamanhoCalculado = size / 1024;
    let ext = "MB"
    if(tamanhoCalculado > 1024){
      tamanhoCalculado = tamanhoCalculado / 1024;
      ext = "GB"
    }
    return tamanhoCalculado.toFixed(2) + ext;
  }



}
