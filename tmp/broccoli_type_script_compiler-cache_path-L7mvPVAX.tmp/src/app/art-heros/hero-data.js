"use strict";
/**
 * Created by josefsosa on 5/14/16.
 */
var HeroData = (function () {
    function HeroData() {
    }
    HeroData.prototype.createDb = function () {
        var heroes = [
            { "id": 1, "name": "Vincent Vangogh" },
            { "id": 2, "name": "Andrew Wyeth" },
            { "id": 3, "name": "salvador dali" },
            { "id": 4, "name": "Pablo Picasso" },
            { "id": 5, "name": "Georges Braque" },
            { "id": 6, "name": "Jiro Yoshihara" },
            { "id": 7, "name": "Gunter Brus" },
            { "id": 8, "name": "Otto Muhl" },
            { "id": 9, "name": "Claude Monet," },
            { "id": 10, "name": "Henri Matisse " }
        ];
        return { heroes: heroes };
    };
    return HeroData;
}());
exports.HeroData = HeroData;
//# sourceMappingURL=hero-data.js.map