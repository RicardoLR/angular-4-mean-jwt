import { TestBed, inject } from '@angular/core/testing';

import { UserstorageService } from './userstorage.service';

describe('UserstorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserstorageService]
    });
  });

  it('should be created', inject([UserstorageService], (service: UserstorageService) => {
    expect(service).toBeTruthy();
  }));
});
