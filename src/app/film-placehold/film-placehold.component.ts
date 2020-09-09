import { Film } from './../models/films';
import { FilmsService } from './../services/films.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-film-placehold',
  templateUrl: './film-placehold.component.html',
  styleUrls: ['./film-placehold.component.css']
})
export class FilmPlaceholdComponent implements OnInit {

  /*public serviceFilms2;
  public filme: Film[];*/

  constructor(
    private serviceFilms: FilmsService
  ) { }

  ngOnInit() {
  }

  /*getFilms(){
    this.serviceFilms.getFilmsService().subscribe(
      (data) => {
        //console.log(data);
        this.filme=data["Search"] //as Film[]
        console.log(this.filme);
      }
    )
  }*/

}
