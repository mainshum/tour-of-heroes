import { Injectable } from '@angular/core';
import { HEROES } from './heroes/mock-heroes';
import { Hero } from './heroes/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private ms: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.ms.add('Hero service: fetched heroes');

    return of(HEROES);
  }
}
