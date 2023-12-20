import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonBorrarComponent } from './boton-borrar.component';

describe('BotonBorrarComponent', () => {
  let component: BotonBorrarComponent;
  let fixture: ComponentFixture<BotonBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonBorrarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
