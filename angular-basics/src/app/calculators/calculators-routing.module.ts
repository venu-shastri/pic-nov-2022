import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'
import { CalculatorcardsComponent } from './calculatorcards/calculatorcards.component';

const caluculatorsRoutePathConfigurations:Routes=[
    //http://localhost:4200/dashboard/calculators/""
    {path:"",component:CalculatorcardsComponent}
    
];

@NgModule({
    imports:[RouterModule.forChild(caluculatorsRoutePathConfigurations)],
    exports:[RouterModule]
    
})
export class CalculatorsRoutingModule{



}
