import { Component } from '@angular/core';
import {Hero} from '../hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // hero:Hero = {
  //   id: 1,
  //   name: 'jack'
  // }
  selectedHero:Hero;

  heroes: Hero[] = HEROES
  constructor() {}

  selectHero(hero: Hero):void {
    this.selectedHero = hero;
  }
}
