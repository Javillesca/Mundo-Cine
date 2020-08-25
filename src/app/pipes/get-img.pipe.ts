import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getImg'
})
export class GetImgPipe implements PipeTransform {

  transform(value: any, getPoster: boolean = false ): any {

    const urlImg = 'http://image.tmdb.org/t/p/w300';

    if ( getPoster ) {
      return urlImg + value.poster_path;
    }
    if ( value.backdrop_path ) {
      return urlImg + value.backdrop_path;
    } else if ( value.poster_path ) {
      return urlImg + value.poster_path;
    } else {
      return 'assets/img/no-image.jpg';
    }
  }

}
