import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenutoComponent } from './contenuto.component';

describe('ContenutoComponent', () => {
  let component: ContenutoComponent;
  let fixture: ComponentFixture<ContenutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
