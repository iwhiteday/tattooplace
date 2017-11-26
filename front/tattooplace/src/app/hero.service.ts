import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import { Observable } from "rxjs/Observable";
import { MessageService } from "./message.service";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HeroService {
  private serverUrl = 'http://localhost:3000';
  private heroesPath = '/test_data';
  private heroPath = '/test_data/:id';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.log('fetched heroes');
    return this.http.get<Hero[]>(this.getUrl(this.heroesPath));
  }

  getHero(id: number): Observable<Hero> {
    this.log(`fetched hero with id=${id}`);
    return this.http.get<Hero>(this.getUrl(this.heroPath.replace(':id', `${id}`)));
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private getUrl(path: string) {
    return this.serverUrl + path;
  }
}
