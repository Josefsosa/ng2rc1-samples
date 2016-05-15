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
var core_1 = require('@angular/core');
var wiki_component_1 = require('./wiki.component');
var ArtHerosComponent = (function () {
    function ArtHerosComponent() {
        this.title = 'My Art Heroes';
        this.heroes = HEROES;
    }
    ArtHerosComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    ArtHerosComponent = __decorate([
        core_1.Component({
            selector: 'art-heros',
            templateUrl: 'app/art-heros/art-heros.component.html',
            styleUrls: ['app/art-heros/art-heros.component.css'],
            directives: [wiki_component_1.WikiComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ArtHerosComponent);
    return ArtHerosComponent;
}());
exports.ArtHerosComponent = ArtHerosComponent;
var HEROES = [
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
//# sourceMappingURL=art-heros.component.js.map