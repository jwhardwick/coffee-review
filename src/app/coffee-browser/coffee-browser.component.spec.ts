import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeBrowserComponent } from './coffee-browser.component';

describe('CoffeeBrowserComponent', () => {
  let component: CoffeeBrowserComponent;
  let fixture: ComponentFixture<CoffeeBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
