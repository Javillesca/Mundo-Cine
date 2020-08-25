import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesAppService } from '../../services/movies-app.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string = '';

  constructor(public ms: MoviesAppService,
              public aRoute: ActivatedRoute) {
                this.aRoute.params.subscribe(data => {
                  if ( data['movie'] ) {
                    this.search = data['movie'];
                    this.searchMovie();
                  }
                });
               }

  ngOnInit(): void {
  }

  searchMovie(): any {
    if ( this.search ) {
      console.log(this.search);
      this.ms.searchMovies(this.search).subscribe(data => console.log(data));
    }
  }

}
