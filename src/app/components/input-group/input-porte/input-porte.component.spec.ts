import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPorteComponent } from './input-porte.component';

describe('InputPorteComponent', () => {
  let component: InputPorteComponent;
  let fixture: ComponentFixture<InputPorteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPorteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
