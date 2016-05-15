/**
 * Created by josefsosa on 5/14/16.
 */
import { Component, OnInit } from '@angular/core';
import { Hero }              from './hero';
import { HeroService }       from './hero.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'hero-list',
    template: `
<h3>Heroes:</h3>
<ul>
<li *ngFor="let hero of heroes">
  {{hero.name}}
</li>
</ul>
New hero name:
<input #newHeroName />
<button (click)="addHero(newHeroName.value); newHeroName.value=''">
  Add Hero
</button>
<div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
<h3>Heroes:</h3>
<ul>
  <li *ngFor="let hero of heroes">
    {{hero.name}}
  </li>
</ul>
New hero name:
<input #newHeroName />
<button (click)="addHero(newHeroName.value); newHeroName.value=''">
  Add Hero
</button>
<div class="error" *ngIf="errorMessage">{{errorMessage}}</div>

    `,
    providers: [HeroService, Http],
  styles: ['.error {color:red;}']
})
export class HeroListComponent implements OnInit {

  constructor (private heroService: HeroService) {}

  errorMessage: string;
  heroes:Hero[];

  ngOnInit() { this.getHeroes(); }

  getHeroes() {
  this.heroService.getHeroes()
    .subscribe(
      heroes => this.heroes = heroes,
    error =>  this.errorMessage = <any>error);
    }

    addHero (name: string) {
      if (!name) {return;}
      this.heroService.addHero(name)
      .subscribe(
      hero  => this.heroes.push(hero),
      error =>  this.errorMessage = <any>error);
      }
    }
