import { TestBed } from '@angular/core/testing';

import { EditarPacienteService } from './editar-paciente.service';

describe('EditarPacienteService', () => {
  let service: EditarPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
