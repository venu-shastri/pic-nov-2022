import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorcardsComponent } from './calculatorcards.component';

describe('CalculatorcardsComponent', () => {
  let component: CalculatorcardsComponent;
  let fixture: ComponentFixture<CalculatorcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
