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
    this.heroes = this.heroService.getHero();

  }
}
