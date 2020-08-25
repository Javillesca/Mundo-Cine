import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesAppService {

  private apiKey: string = '8e4fe5dd406998c4ff2e53688d4c3465';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';
  private language: string = 'es';
  movies: any[] = [];

  constructor(private http: HttpClient) { }

  getCinemaList(): any {

    const fromDate = new Date();
    const toDate = new Date();
    toDate.setDate( fromDate.getDate() + 30);

    const fromString = fromDate.toISOString().substring(0, 10);
    const toString = toDate.toISOString().substring(0, 10);

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ fromString }&primary_release_date.lte=${ toString }&api_key=${ this.apiKey }&language=${ this.language }`;
    console.log(url);
    return this.http.get(url).pipe(map((res: any ) => res.results));
  }

  getPopulars(): any {
    const url = `${ this.urlMoviedb }/discover/movie?api_key=${this.apiKey}&sort_by=popularity.desc&language=${this.language}`;
    console.log(url);
    return this.http.get(url).pipe(map((res: any ) => res.results));
  }

  searchMovies( value : string ): any {
    console.log(value);
    const url = `${ this.urlMoviedb }/search/movie?query=${ value }&api_key=${ this.apiKey }&sort_by=popularity.desc&language=${this.language}`;
    console.log(url);
    return this.http.get(url).pipe(map((res: any ) =>{
      this.movies = res.results;
      return res.results;
    }));
  }

  getPopularsKids(): any {
    const url = `${ this.urlMoviedb }/discover/movie?api_key=${this.apiKey}&certification.lte=G&sort_by=popularity.desc&certification_country=${this.language}`;
    console.log(url);
    return this.http.get(url).pipe(map((res: any ) => res.results));
  }

  getMovie(id: string): any {
    const url = `${ this.urlMoviedb }/movie/${ id }?api_key=${this.apiKey}&language=${this.language}`;
    console.log(url);
    return this.http.get(url).pipe(map((res: any ) => res));
  }

  getMovieVideos(id: string): any {
    const url = `${ this.urlMoviedb }/movie/${ id }/videos?api_key=${this.apiKey}&language=${this.language}`;
    console.log(url);
    return this.http.get(url).pipe(map((res: any ) => res.results[0]));
  }
}
