import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Contenuto2Component } from './contenuto2.component';

describe('Contenuto2Component', () => {
  let component: Contenuto2Component;
  let fixture: ComponentFixture<Contenuto2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contenuto2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contenuto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
