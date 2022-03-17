import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  searchValue: string = '';

  constructor( private router: Router ) { }

  searchMovie( ): any {

    if ( this.searchValue.length === 0 ) {
      return;
    }

    this.router.navigate(['search', this.searchValue]);
  }

}
