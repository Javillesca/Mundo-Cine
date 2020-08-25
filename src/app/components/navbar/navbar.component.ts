import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  searchValue: string = '';

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  searchMovie( ): any {

    if ( this.searchValue.length === 0 ) {
      return;
    }
    console.log(this.searchValue);
    this.router.navigate(['search', this.searchValue]);
  }

}
