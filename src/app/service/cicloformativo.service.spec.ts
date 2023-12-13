import { TestBed } from '@angular/core/testing';

import { CicloformativoService } from './cicloformativo.service';

describe('CicloformativoService', () => {
  let service: CicloformativoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CicloformativoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
