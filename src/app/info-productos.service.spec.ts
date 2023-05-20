import { TestBed } from '@angular/core/testing';

import { InfoProductosService } from './info-productos.service';

describe('InfoProductosService', () => {
  let service: InfoProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
