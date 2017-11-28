import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../hero.service";
import { Location } from "@angular/common";

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    this.heroService.getHero(this.route.snapshot.paramMap.get('id'))
      .subscribe(hero => this.hero = hero)
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
