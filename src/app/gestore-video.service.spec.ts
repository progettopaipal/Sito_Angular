import { TestBed } from '@angular/core/testing';

import { GestoreVideoService } from './gestore-video.service';

describe('GestoreVideoService', () => {
  let service: GestoreVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestoreVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
