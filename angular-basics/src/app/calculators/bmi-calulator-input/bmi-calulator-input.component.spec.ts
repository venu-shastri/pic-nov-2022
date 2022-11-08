import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalulatorInputComponent } from './bmi-calulator-input.component';

describe('BmiCalulatorInputComponent', () => {
  let component: BmiCalulatorInputComponent;
  let fixture: ComponentFixture<BmiCalulatorInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiCalulatorInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiCalulatorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
