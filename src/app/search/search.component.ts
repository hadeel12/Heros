import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {Hero} from '../hero';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/internal/operators';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private heroService:HeroService) { }

  private searchTerms = new Subject<string>();
  heroes: Hero;

  ngOnInit() {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string)=>this.heroService.searchHero(term))
    ).subscribe(hero => this.heroes = hero)
  }

  search(term: string) {
    this.searchTerms.next(term);
  }


}
