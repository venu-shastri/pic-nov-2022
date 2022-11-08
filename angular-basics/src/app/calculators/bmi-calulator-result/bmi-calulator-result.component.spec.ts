import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalulatorResultComponent } from './bmi-calulator-result.component';

describe('BmiCalulatorResultComponent', () => {
  let component: BmiCalulatorResultComponent;
  let fixture: ComponentFixture<BmiCalulatorResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiCalulatorResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiCalulatorResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
