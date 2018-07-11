import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTipoAnimalComponent } from './input-tipo-animal.component';

describe('InputTipoAnimalComponent', () => {
  let component: InputTipoAnimalComponent;
  let fixture: ComponentFixture<InputTipoAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTipoAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTipoAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
