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
import { ReportsModule } from './reports/reports.module'
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component'
import { AppRoutingModule } from './appRouting.module'



//Route Congiguartion


@NgModule({
    declarations:[AppComponent,HoverDirective, HomeComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,
        CalculatorsModule,
        AccountsModule, BrowserAnimationsModule,
        UtilityModule,ReportsModule,CommonModule,AppRoutingModule
    ],
    providers:[
        {provide:"logger",useClass:ConsoleLoggerService},
        
    ]
})
export class AppModule{

}