import { TestBed } from '@angular/core/testing';

import { EditaNutricionistaService } from './edita-nutricionista.service';

describe('EditaNutricionistaService', () => {
  let service: EditaNutricionistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditaNutricionistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
