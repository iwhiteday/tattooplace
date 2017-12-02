import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {Universe} from "../universe.enum";

@Component({
  selector: 'app-hero-registration',
  templateUrl: './hero-registration.component.html',
  styleUrls: ['./hero-registration.component.scss']
})
export class HeroRegistrationComponent implements OnInit {
  hero: Hero;
  Universe = Universe;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.hero = new Hero();
  }

  saveHero(): void {
    this.heroService.createHero(this.hero)
      .subscribe(() => this.saved());
  }

  saved(): void {
    alert('saved');
  }
}
