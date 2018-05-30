import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent{
  heroes = this.heroService.getHero();
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
