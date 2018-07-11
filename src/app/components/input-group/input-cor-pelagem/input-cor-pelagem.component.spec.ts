import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCorPelagemComponent } from './input-cor-pelagem.component';

describe('InputCorPelagemComponent', () => {
  let component: InputCorPelagemComponent;
  let fixture: ComponentFixture<InputCorPelagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCorPelagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCorPelagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
