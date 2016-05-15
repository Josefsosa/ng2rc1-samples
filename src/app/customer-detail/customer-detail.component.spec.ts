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
import { CustomerDetailComponent } from './customer-detail.component';

describe('Component: CustomerDetail', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [CustomerDetailComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([CustomerDetailComponent],
      (component: CustomerDetailComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(CustomerDetailComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(CustomerDetailComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-customer-detail></app-customer-detail>
  `,
  directives: [CustomerDetailComponent]
})
class CustomerDetailComponentTestController {
}

