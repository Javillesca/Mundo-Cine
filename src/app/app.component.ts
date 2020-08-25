import { Component } from '@angular/core';
import { MoviesAppService } from './services/movies-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-app';

  constructor() {
  }
}

