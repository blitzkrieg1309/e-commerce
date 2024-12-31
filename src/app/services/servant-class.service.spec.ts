import { TestBed } from '@angular/core/testing';

import { ServantClassService } from './servant-class.service';

describe('ServantClassService', () => {
  let service: ServantClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServantClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
