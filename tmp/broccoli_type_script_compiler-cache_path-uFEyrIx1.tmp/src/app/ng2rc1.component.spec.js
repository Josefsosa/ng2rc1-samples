"use strict";
var testing_1 = require('@angular/core/testing');
var ng2rc1_component_1 = require('../app/ng2rc1.component');
testing_1.beforeEachProviders(function () { return [ng2rc1_component_1.Ng2rc1AppComponent]; });
testing_1.describe('App: Ng2rc1', function () {
    testing_1.it('should create the app', testing_1.inject([ng2rc1_component_1.Ng2rc1AppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'ng2rc1 works!\'', testing_1.inject([ng2rc1_component_1.Ng2rc1AppComponent], function (app) {
        testing_1.expect(app.title).toEqual('ng2rc1 works!');
    }));
});
//# sourceMappingURL=ng2rc1.component.spec.js.map