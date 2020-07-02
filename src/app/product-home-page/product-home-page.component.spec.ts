import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHomePageComponent } from './product-home-page.component';

describe('ProductHomePageComponent', () => {
  let component: ProductHomePageComponent;
  let fixture: ComponentFixture<ProductHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
