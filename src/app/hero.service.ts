import { Injectable } from '@angular/core';
import { Heroes} from './heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes = Heroes;
  constructor() { }
  getHero() {
    return this.heroes;
  }
}
