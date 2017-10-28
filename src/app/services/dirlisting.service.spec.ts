import { TestBed, inject } from '@angular/core/testing';

import { DirlistingService } from './dirlisting.service';

describe('DirlistingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirlistingService]
    });
  });

  it('should be created', inject([DirlistingService], (service: DirlistingService) => {
    expect(service).toBeTruthy();
  }));
});
