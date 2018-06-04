import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Hero} from './hero';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
 private heroesUrl = 'api/heroes';
  constructor(private http: HttpClient , private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>  {
    this.messageService.addMessage("HeroService: fetched heroes");
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  getById(id: number): Observable<Hero> {
    this.messageService.addMessage("HeroService: fetched heroes of id " + id );
     return this.http.get<Hero>(this.heroesUrl + '/' + id);
  }
  addHero(hero: Hero): Observable<Hero> {
    this.messageService.addMessage("HeroService: add hero name " + hero.name);
    return this.http.post<Hero>(this.heroesUrl , hero);
  }
  updateHero(hero: Hero) {
    this.messageService.addMessage("HeroService: Update Hero of id =" + hero.id);
    return this.http.put(this.heroesUrl , hero);
  }
  deleteHero(hero: Hero): Observable<Hero> {
    const id = hero.id ;
    this.messageService.addMessage("HeroService: Delete Hero of id =" + id);
    return this.http.delete<Hero>(this.heroesUrl+'/'+id);
  }

}
