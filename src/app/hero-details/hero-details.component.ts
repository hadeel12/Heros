import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero;
  constructor(
  private heroService: HeroService,
  private route: ActivatedRoute,
  private location: Location) {
  }

  ngOnInit() {
    this.selectHero();
  }

  selectHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getById(id).subscribe(hero => this.hero = hero);
  }
  updateHero() {
    this.heroService.updateHero(this.hero).subscribe(h =>this.goBack());
  }
  goBack() {
    this.location.back();
  }

}
