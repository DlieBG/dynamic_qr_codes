import { TestBed } from '@angular/core/testing';

import { UniquePartService } from './unique-part.service';

describe('UniquePartService', () => {
  let service: UniquePartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniquePartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
