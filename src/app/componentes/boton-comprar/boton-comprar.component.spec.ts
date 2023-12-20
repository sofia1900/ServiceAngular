import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonComprarComponent } from './boton-comprar.component';

describe('BotonComprarComponent', () => {
  let component: BotonComprarComponent;
  let fixture: ComponentFixture<BotonComprarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonComprarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
