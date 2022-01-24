import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendadaComponent } from './agendada.component';

describe('AgendadaComponent', () => {
  let component: AgendadaComponent;
  let fixture: ComponentFixture<AgendadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
