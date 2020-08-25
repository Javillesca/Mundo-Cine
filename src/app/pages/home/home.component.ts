import { Component, OnInit } from '@angular/core';
import { MoviesAppService } from '../../services/movies-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  cinemaList: any;
  populars: any;
  popularsKids: any;

  constructor(public ms: MoviesAppService) {
    this.ms.getCinemaList().subscribe( data => {
      this.cinemaList = data;
    });
    this.ms.getPopulars().subscribe( data => {
      this.populars = data;
      console.log(this.populars);
    });
    this.ms.getPopularsKids().subscribe( data => this.popularsKids = data );
    // this.ms.searchMovie('wall-e').subscribe(data => {
    // });
  }

  ngOnInit(): void {
  }

}
