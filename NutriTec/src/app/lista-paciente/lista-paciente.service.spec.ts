import { TestBed } from '@angular/core/testing';

import { ListaPacienteService } from './lista-paciente.service';

describe('ListaPacienteService', () => {
  let service: ListaPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
