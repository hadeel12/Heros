import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import {Hero} from '../hero';



@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent {
  heroes: Hero[];
  constructor(private heroService: HeroService) {
    this.heroService.getHeroes().subscribe(hero => this.heroes = hero);
  }
  addHero(heroName: string) {
    this.heroService.addHero({id: null , name: heroName}).subscribe(hero => this.heroes.push(hero));
  }

  deleteHero(hero: Hero){
    this.heroes = this.heroes.filter(h => h.id  !== hero.id);
    this.heroService.deleteHero(hero).subscribe();
  }
}
