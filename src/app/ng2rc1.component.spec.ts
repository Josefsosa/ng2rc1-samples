import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2rc1AppComponent } from '../app/ng2rc1.component';

beforeEachProviders(() => [Ng2rc1AppComponent]);

describe('App: Ng2rc1', () => {
  it('should create the app',
      inject([Ng2rc1AppComponent], (app: Ng2rc1AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2rc1 works!\'',
      inject([Ng2rc1AppComponent], (app: Ng2rc1AppComponent) => {
    expect(app.title).toEqual('ng2rc1 works!');
  }));
});
