"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
// Add all operators to Observable
require('rxjs/Rx');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.Ng2rc1AppComponent);
//# sourceMappingURL=main.js.map