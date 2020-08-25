import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-box',
  templateUrl: './gallery-box.component.html',
  styleUrls: ['./gallery-box.component.css']
})
export class GalleryBoxComponent implements OnInit {

  @Input('movies') movies;
  @Input('title') title;

  constructor() { }

  ngOnInit(): void {
  }

}
