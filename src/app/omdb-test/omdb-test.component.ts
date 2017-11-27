import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../services/omdb.service.client';

@Component({
  selector: 'app-omdb-test',
  templateUrl: './omdb-test.component.html',
  styleUrls: ['./omdb-test.component.css']
})
export class OmdbTestComponent implements OnInit {
  title: String;
  movies = [];
  constructor(private omdbService: OmdbService) { }

  ngOnInit() {
  }

  searchMovie(title) {
    this.title = title;
    this.omdbService.searchMovie(this.title)
      .subscribe((movies) => {
        this.movies = movies.Search;
        // console.log(this.movies);
      })
  }

}
