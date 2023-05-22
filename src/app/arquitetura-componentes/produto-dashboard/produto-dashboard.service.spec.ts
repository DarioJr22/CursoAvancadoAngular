import { TestBed } from '@angular/core/testing';

import { ProdutoDashboardService } from './produto-dashboard.service';

describe('ProdutoDashboardService', () => {
  let service: ProdutoDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
