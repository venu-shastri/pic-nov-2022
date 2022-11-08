import{NgModule} from  '@angular/core'
import { AppComponent } from './app-component/app.component'
import { BrowserModule } from '@angular/platform-browser'
import { CalculatorsModule } from './calculators/calculators.module'
import { HoverDirective } from './directives/hover.directive'
import { AccountsModule } from './accounts/accounts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { UtilityModule } from './utility/utility.module'
import { ApiLoggerService } from './services/apiLogger.service'
import { ConsoleLoggerService } from './services/consoleLogger.service'


@NgModule({
    declarations:[AppComponent,HoverDirective],
    bootstrap:[AppComponent],
    imports:[BrowserModule,CalculatorsModule,AccountsModule, BrowserAnimationsModule,UtilityModule],
    providers:[
        {provide:"logger",useClass:ConsoleLoggerService},
        
    ]
})
export class AppModule{

}