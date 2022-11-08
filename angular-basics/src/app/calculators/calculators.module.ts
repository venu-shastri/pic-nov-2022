import {NgModule} from '@angular/core'
import { MeldCalculatorComponent } from './meld-calculator/meldCalculator.component'
import { CommonModule } from '@angular/common';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component'
import { FormsModule } from '@angular/forms';
import { BmiCalulatorInputComponent } from './bmi-calulator-input/bmi-calulator-input.component';
import { BmiCalulatorResultComponent } from './bmi-calulator-result/bmi-calulator-result.component';
@NgModule({
    declarations:[MeldCalculatorComponent, BmiCalculatorComponent, BmiCalulatorInputComponent, BmiCalulatorResultComponent],
    exports:[MeldCalculatorComponent,BmiCalculatorComponent],
    imports:[CommonModule,FormsModule]
})
export class CalculatorsModule{

}