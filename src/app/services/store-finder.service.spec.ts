import { TestBed } from '@angular/core/testing';

import { StoreFinderService } from './store-finder.service';

describe('StoreFinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreFinderService = TestBed.get(StoreFinderService);
    expect(service).toBeTruthy();
  });
});
