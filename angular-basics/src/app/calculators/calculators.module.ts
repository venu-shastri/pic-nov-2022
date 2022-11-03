import {NgModule} from '@angular/core'
import { MeldCalculatorComponent } from './meld-calculator/meldCalculator.component'
import { CommonModule } from '@angular/common'
@NgModule({
    declarations:[MeldCalculatorComponent],
    exports:[MeldCalculatorComponent],
    imports:[CommonModule]
})
export class CalculatorsModule{

}