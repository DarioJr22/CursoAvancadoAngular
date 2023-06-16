import { TestBed } from '@angular/core/testing';

import { EstudoPipesService } from './estudo-pipes.service';

describe('EstudoPipesService', () => {
  let service: EstudoPipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudoPipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
