import { Component } from '@angular/core';
import { Hero } from './hero';
import { WikiComponent } from './wiki.component';

@Component({
  selector: 'art-heros',
  templateUrl: 'app/art-heros/art-heros.component.html',
  styleUrls: ['app/art-heros/art-heros.component.css'],
  directives:[WikiComponent]
})
export class ArtHerosComponent {
  title = 'My Art Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero) { this.selectedHero = hero; }
}

var HEROES: Hero[] = [
  { "id": 1, "name": "Vincent Vangogh" },
  { "id": 2, "name": "Andrew Wyeth" },
  { "id": 3, "name": "salvador dali" },
  { "id": 4, "name": "Pablo Picasso" },
  { "id": 5, "name": "Georges Braque" },
  { "id": 6, "name": "Jiro Yoshihara" },
  { "id": 7, "name": "Gunter Brus" },
  { "id": 8, "name": "Otto Muhl" },
  { "id": 9, "name": "Claude Monet" },
  { "id": 10, "name": "Henri Matisse " }
];
