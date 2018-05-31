import { Component } from '@angular/core';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent {
  heroes = this.heroService.getHero();
  constructor(private heroService: HeroService) {
  }
}
