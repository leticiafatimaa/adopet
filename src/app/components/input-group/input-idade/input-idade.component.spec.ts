import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputIdadeComponent } from './input-idade.component';

describe('InputIdadeComponent', () => {
  let component: InputIdadeComponent;
  let fixture: ComponentFixture<InputIdadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputIdadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputIdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
