import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Hero} from './hero';
import { MessageService } from './message.service';
import {catchError, tap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
 private heroesUrl = 'api/heroes';
  constructor(private http: HttpClient , private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>  {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(()=>this.logMessage("fetched heroes") ),
      catchError(this.handleError('Get Hero'))
    );
  }
  getById(id: number): Observable<Hero> {
     return this.http.get<Hero>(this.heroesUrl +'/'+ id).pipe(
      tap(()=>this.logMessage("fetched heroes of id " + id ) ),
       catchError(this.handleError('Get Hero By Id'))
     );
  }
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl , hero).pipe(
      tap(()=>this.logMessage("add hero name " + hero.name) ),
      catchError(this.handleError('Add Hero'))
    );
  }
  updateHero(hero: Hero):Observable<Hero> {
    return this.http.put(this.heroesUrl , hero).pipe(
      tap(()=>this.logMessage("Update Hero of id =" + hero.id) ),
      catchError(this.handleError('Update Hero'))
    );
  }
  deleteHero(hero: Hero): Observable<Hero> {
    const id = hero.id ;
    return this.http.delete<Hero>(this.heroesUrl+'/'+id).pipe(
      tap(()=>this.logMessage("Delete Hero of id =" + id) ),
      catchError(this.handleError('Delete Hero'))
    );
  }
  searchHero(term: string):Observable<Hero> {
    if(term.trim() === '')return of([] as any);
    return this.http.get<Hero>(this.heroesUrl+'/?name='+term).pipe(
      tap(()=>this.logMessage("found heroes matching " +term) ),
      catchError(this.handleError('Search Hero'))
    );
  }
  private handleError (operationName) {
    return (error): Observable<any> => {
      console.error(error);
      this.messageService.addMessage(`${operationName} failed: ${error.body.error}`);
      return of([]);
    };
  }
  logMessage(message: string):void {
    this.messageService.addMessage("HeroService: " + message)  }
}
