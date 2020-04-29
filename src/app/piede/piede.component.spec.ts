import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedeComponent } from './piede.component';

describe('PiedeComponent', () => {
  let component: PiedeComponent;
  let fixture: ComponentFixture<PiedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
