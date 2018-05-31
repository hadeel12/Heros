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
  getById(id: number) {
     return this.heroes.find(h => h.id === id);
  }
}
