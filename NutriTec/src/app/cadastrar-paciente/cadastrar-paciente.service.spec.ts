import { TestBed } from '@angular/core/testing';

import { CadastrarPacienteService } from './cadastrar-paciente.service';

describe('CadastrarPacienteService', () => {
  let service: CadastrarPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
