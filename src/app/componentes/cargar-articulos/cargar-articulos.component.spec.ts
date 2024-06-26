import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarArticulosComponent } from './cargar-articulos.component';

describe('CargarArticulosComponent', () => {
  let component: CargarArticulosComponent;
  let fixture: ComponentFixture<CargarArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CargarArticulosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CargarArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
