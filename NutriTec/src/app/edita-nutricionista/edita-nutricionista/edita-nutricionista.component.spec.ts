import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaNutricionistaComponent } from './edita-nutricionista.component';

describe('EditaNutricionistaComponent', () => {
  let component: EditaNutricionistaComponent;
  let fixture: ComponentFixture<EditaNutricionistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaNutricionistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaNutricionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
