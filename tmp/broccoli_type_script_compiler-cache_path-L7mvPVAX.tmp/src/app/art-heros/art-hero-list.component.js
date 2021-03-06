"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by josefsosa on 5/14/16.
 */
var core_1 = require('@angular/core');
var hero_service_1 = require('./hero.service');
var http_1 = require('@angular/http');
var HeroListComponent = (function () {
    function HeroListComponent(heroService) {
        this.heroService = heroService;
    }
    HeroListComponent.prototype.ngOnInit = function () { this.getHeroes(); };
    HeroListComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes; }, function (error) { return _this.errorMessage = error; });
    };
    HeroListComponent.prototype.addHero = function (name) {
        var _this = this;
        if (!name) {
            return;
        }
        this.heroService.addHero(name)
            .subscribe(function (hero) { return _this.heroes.push(hero); }, function (error) { return _this.errorMessage = error; });
    };
    HeroListComponent = __decorate([
        core_1.Component({
            selector: 'hero-list',
            template: "\n<h3>Heroes:</h3>\n<ul>\n<li *ngFor=\"let hero of heroes\">\n  {{hero.name}}\n</li>\n</ul>\nNew hero name:\n<input #newHeroName />\n<button (click)=\"addHero(newHeroName.value); newHeroName.value=''\">\n  Add Hero\n</button>\n<div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n<h3>Heroes:</h3>\n<ul>\n  <li *ngFor=\"let hero of heroes\">\n    {{hero.name}}\n  </li>\n</ul>\nNew hero name:\n<input #newHeroName />\n<button (click)=\"addHero(newHeroName.value); newHeroName.value=''\">\n  Add Hero\n</button>\n<div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n\n    ",
            providers: [hero_service_1.HeroService, http_1.Http],
            styles: ['.error {color:red;}']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroListComponent);
    return HeroListComponent;
}());
exports.HeroListComponent = HeroListComponent;
//# sourceMappingURL=art-hero-list.component.js.map