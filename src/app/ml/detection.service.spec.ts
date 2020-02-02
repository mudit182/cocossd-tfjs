import { TestBed } from '@angular/core/testing';

import { DetectionService } from './detection.service';

describe('DetectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetectionService = TestBed.get(DetectionService);
    expect(service).toBeTruthy();
  });
});
