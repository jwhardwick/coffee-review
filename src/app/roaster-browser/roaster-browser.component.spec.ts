import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoasterBrowserComponent } from './roaster-browser.component';

describe('RoasterBrowserComponent', () => {
  let component: RoasterBrowserComponent;
  let fixture: ComponentFixture<RoasterBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoasterBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoasterBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
