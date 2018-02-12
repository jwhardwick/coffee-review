import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoasterDetailComponent } from './roaster-detail.component';

describe('RoasterDetailComponent', () => {
  let component: RoasterDetailComponent;
  let fixture: ComponentFixture<RoasterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoasterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoasterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
