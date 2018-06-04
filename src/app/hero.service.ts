import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Hero} from './hero';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
 private heroesUrl = 'api/heroes';
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]>  {
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  getById(id: number): Observable<Hero> {
     return this.http.get<Hero>(this.heroesUrl + '/' + id);
  }
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl , hero);
  }
  updateHero(hero: Hero) {
    return this.http.put(this.heroesUrl , hero);
  }
  deleteHero(hero: Hero): Observable<Hero> {
    const id = hero.id ;
    return this.http.delete<Hero>(this.heroesUrl+'/'+id);
  }

}
