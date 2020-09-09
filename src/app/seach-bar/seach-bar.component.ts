import { FilmsService } from './../services/films.service';
import { Component, OnInit } from '@angular/core';
import { Film } from '../models/films';

@Component({
  selector: 'app-seach-bar',
  templateUrl: './seach-bar.component.html',
  styleUrls: ['./seach-bar.component.css']
})
export class SeachBarComponent implements OnInit {

  public filmSeachBar:Film[];

  constructor(private serviceFilms: FilmsService) { }


  ngOnInit() {
    this.searchMovie(null);
  }


  buscarFilme(movieTitle){
    console.log(movieTitle);
    return this.serviceFilms.getSearchFilmeService(movieTitle).subscribe(
      data => {
        this.filmSeachBar = data["Search"];
        console.log(this.filmSeachBar);
      }
    )
  }

  refesh(){
    window.location.reload();
  }

  searchMovie(movieTitle){

    return this.buscarFilme(movieTitle);

  }

}
