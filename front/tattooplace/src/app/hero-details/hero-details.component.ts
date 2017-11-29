import {Component, OnInit, Input} from '@angular/core';
import { Hero } from '../hero';
import {HeroService} from "../hero.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(+100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class HeroDetailsComponent implements OnInit {

  @Input() hero: Hero;

  loading: boolean;
  updated: boolean;

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.loading = false;
    this.updated = false;
  }

  goBack(): void {
    this.hero = null;
  }

  save(): void {
    this.updated = false;
    setTimeout(() => this.loading = !this.updated, 300);
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.loaded());
  }

  loaded(): void {
    this.updated = true;
    this.loading = false;
    this.goBack();
  }
}
