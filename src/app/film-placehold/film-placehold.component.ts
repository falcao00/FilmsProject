import { Film } from './../models/films';
import { FilmsService } from './../services/films.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-film-placehold',
  templateUrl: './film-placehold.component.html',
  styleUrls: ['./film-placehold.component.css']
})
export class FilmPlaceholdComponent implements OnInit {

  public serviceFilms2;

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
        this.serviceFilms2 = data //as Film[]
        console.log(this.serviceFilms2)
      }
    )
  }

}
