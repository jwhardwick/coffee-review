import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoffeesComponent } from './my-coffees.component';

describe('MyCoffeesComponent', () => {
  let component: MyCoffeesComponent;
  let fixture: ComponentFixture<MyCoffeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCoffeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCoffeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
