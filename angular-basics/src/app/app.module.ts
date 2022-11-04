import{NgModule} from  '@angular/core'
import { AppComponent } from './app-component/app.component'
import { BrowserModule } from '@angular/platform-browser'
import { CalculatorsModule } from './calculators/calculators.module'
import { HoverDirective } from './directives/hover.directive'


@NgModule({
    declarations:[AppComponent,HoverDirective],
    bootstrap:[AppComponent],
    imports:[BrowserModule,CalculatorsModule]
})
export class AppModule{

}