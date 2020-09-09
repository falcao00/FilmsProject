import { FilmsService } from './../services/films.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seach-bar',
  templateUrl: './seach-bar.component.html',
  styleUrls: ['./seach-bar.component.css']
})
export class SeachBarComponent implements OnInit {

  constructor(private serviceFilms: FilmsService) { }

  ngOnInit() {
  }


  buscarFilme(movieTitle){
    console.log(movieTitle);
    return this.serviceFilms.getSearchFilmeService(movieTitle).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
