import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {catchError, throwError} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProdutoDashboardService {

  httpOptions = {
    headers:new HttpHeaders({
      'Authorization':'U7W1bGDVc5kTy7xBZCs7QD3YJBcFqDq1L5BIqsvALcYh07v295SKJcAN'
    })
  }

  constructor(private http:HttpClient){}

  getImages(pesquisa:string,perPage:number){
    const url = `https://api.pexels.com/v1/search?query=${pesquisa}&per_Page=${perPage}`
    return this.http.get(url,this.httpOptions)
  }

  getImageByid(id:any){
    const url = `https://api.pexels.com/v1/photos/${id}`
    return this.http.get(url,this.httpOptions)
  }

  obterTodos(){

  }

}
