import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero;
  constructor(
  private heroService: HeroService,
  private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.selectHero();
  }

  selectHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hero = this.heroService.getById(id);
  }
}
