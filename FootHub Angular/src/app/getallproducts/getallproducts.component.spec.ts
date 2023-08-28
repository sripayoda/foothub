import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallproductsComponent } from './getallproducts.component';

describe('GetallproductsComponent', () => {
  let component: GetallproductsComponent;
  let fixture: ComponentFixture<GetallproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetallproductsComponent]
    });
    fixture = TestBed.createComponent(GetallproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
