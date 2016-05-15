import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ChuckNorrisComponent } from './chuck-norris.component';

describe('Component: ChuckNorris', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ChuckNorrisComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ChuckNorrisComponent],
      (component: ChuckNorrisComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ChuckNorrisComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ChuckNorrisComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-chuck-norris></app-chuck-norris>
  `,
  directives: [ChuckNorrisComponent]
})
class ChuckNorrisComponentTestController {
}

