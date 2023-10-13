import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.ms.add(`Selected hero id: ${hero.id}`);
    this.selectedHero = hero;
  }
  /**
   *
   */
  constructor(private heroService: HeroService, private ms: MessageService) {}

  ngOnInit() {
    this.heroService.getHeroes().subscribe((hs) => (this.heroes = hs));
  }
}
