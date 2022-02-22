import { TestBed } from '@angular/core/testing';

import { CadastrarNutricionistaService } from './cadastrar-nutricionista.service';

describe('CadastrarNutricionistaService', () => {
  let service: CadastrarNutricionistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarNutricionistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
