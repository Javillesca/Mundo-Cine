import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesAppService } from '../../services/movies-app.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  movie: any;
  id: string ;
  playerVars = {
    cc_lang_pref: 'es'
  };
  videos: any[];
  video: string;
  sourcePage: string = '';
  search: string = '';

  constructor(public ms: MoviesAppService,
              public aRoute: ActivatedRoute) {
                this.aRoute.params.subscribe(data => {
                  this.sourcePage = data.page;
                  if ( data.search ) {
                    this.search = data.search;
                  }

                  this.ms.getMovieVideos(data.id).subscribe( videos => {
                    if (videos) {
                      this.id = videos.key ;
                    }
                  });

                  this.ms.getMovie(data.id).subscribe( movie => this.movie = movie );

                });
  }
  ngOnInit(): void {
  }

}
