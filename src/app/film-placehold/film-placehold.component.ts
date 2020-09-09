import { Film } from './../models/films';
import { FilmsService } from './../services/films.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-placehold',
  templateUrl: './film-placehold.component.html',
  styleUrls: ['./film-placehold.component.css']
})
export class FilmPlaceholdComponent implements OnInit {


  constructor(
    private serviceFilms: FilmsService
  ) { }

  ngOnInit() {
    this.getFilms();
  }

  getFilms(){
    this.serviceFilms.getFilmsService().subscribe(
      (data) => {
        //console.log(data);
        this.serviceFilms.filmes = data //as Film[]
        console.log(this.serviceFilms.filmes)
      }
    )
  }

}
