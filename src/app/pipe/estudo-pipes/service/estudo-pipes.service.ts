import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EstudoPipesService  {

  //Sintaxe de declaração de httpOptions
  httpOptions = {
    headers:new HttpHeaders({})
  }

  constructor(private http:HttpClient) {}

  //Crud

  //Get
  getPhotos(){
    const url = 'https://jsonplaceholder.typicode.com/photos'
    return this.http.get(url,this.httpOptions)
  }

  getPhotosById(id:number){
    const url = 'https://jsonplaceholder.typicode.com/photos'
    return this.http.get(`${url}/${id}`,this.httpOptions)
  }

  //Phost
  postPhotos(post:any){
    const url = 'https://jsonplaceholder.typicode.com/photos'
    return this.http.post(url,post,this.httpOptions)
  }

  //Delete
  deletePhotos(id:number){
    const url = 'https://jsonplaceholder.typicode.com/photos'
    return this.http.get(`${url}/${id}`,this.httpOptions)
  }

  //Put
   putPhotos(id:number,post:any){
    const url = 'https://jsonplaceholder.typicode.com/photos'
    return this.http.put(`${url}/${id}`,post,this.httpOptions)
   }



}
