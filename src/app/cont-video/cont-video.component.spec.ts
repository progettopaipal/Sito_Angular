import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContVideoComponent } from './cont-video.component';

describe('ContVideoComponent', () => {
  let component: ContVideoComponent;
  let fixture: ComponentFixture<ContVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
