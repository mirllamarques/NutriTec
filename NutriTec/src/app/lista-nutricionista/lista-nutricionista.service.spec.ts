import { TestBed } from '@angular/core/testing';

import { ListaNutricionistaService } from './lista-nutricionista.service';

describe('ListaNutricionistaService', () => {
  let service: ListaNutricionistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaNutricionistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
