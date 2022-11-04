import {NgModule} from '@angular/core'
import { MeldCalculatorComponent } from './meld-calculator/meldCalculator.component'
import { CommonModule } from '@angular/common';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component'
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations:[MeldCalculatorComponent, BmiCalculatorComponent],
    exports:[MeldCalculatorComponent,BmiCalculatorComponent],
    imports:[CommonModule,FormsModule]
})
export class CalculatorsModule{

}