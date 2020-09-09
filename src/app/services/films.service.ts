import { Film } from './../models/films';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {


  url='https://www.omdbapi.com/?s=x-men&apikey=e03a9ac8'; //rest api

  constructor(
    private httpClient:HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  filmes:Film[]

  getFilmsService(): Observable<any>{
    return this.httpClient.get(this.url)
  }

  getSearchFilmeService(movieName){
    return this.httpClient.get<Film[]>(`https://www.omdbapi.com/?s=${movieName}&apikey=e03a9ac8`)
  }
  
}
