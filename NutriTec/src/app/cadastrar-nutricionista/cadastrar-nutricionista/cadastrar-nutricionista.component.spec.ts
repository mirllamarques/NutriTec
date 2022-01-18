import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarNutricionistaComponent } from './cadastrar-nutricionista.component';

describe('CadastrarNutricionistaComponent', () => {
  let component: CadastrarNutricionistaComponent;
  let fixture: ComponentFixture<CadastrarNutricionistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarNutricionistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarNutricionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
