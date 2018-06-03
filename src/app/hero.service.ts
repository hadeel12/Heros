import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Hero} from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
 private heroUrl = 'api/heroes';
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]>  {
    return this.http.get<Hero[]>(this.heroUrl);
  }
  getById(id: number): Observable<Hero> {
     return this.http.get<Hero>(this.heroUrl + '/' + id);
  }
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroUrl , hero);
  }
  updateHero(hero: Hero) {
    return this.http.put(this.heroUrl , hero);
  }
 
}
