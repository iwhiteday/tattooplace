import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import { Observable } from "rxjs/Observable";
import { MessageService } from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {of} from "rxjs/observable/of";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {
  private serverUrl = 'http://localhost:3000';
  private heroesPath = '/test_data';
  private heroPath = '/test_data/:id';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.log('fetched heroes');
    return this.http.get<Hero[]>(this.getUrl(this.heroesPath));
  }

  getHero(id: string): Observable<Hero> {
    this.log(`fetched hero with id=${id}`);
    return this.http
      .get<Hero>(this.getUrl(this.heroPath.replace(':id', id)));
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.getUrl(this.heroPath.replace(':id', hero.id)), hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private getUrl(path: string) {
    return this.serverUrl + path;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
