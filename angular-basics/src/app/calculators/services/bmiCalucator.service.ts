import { ConsoleLoggerService } from "src/app/services/consoleLogger.service";
import { Injectable ,Inject} from "@angular/core";
import { ILogger } from "src/app/services/logger.contract";

@Injectable()
export class BmiCalculatorService{
    constructor(@Inject("logger")private logger:ILogger){

    }

    calculateBMI(height:number,wieght:number):number{
        console.log("BmiCalculatorService.calculateBMI called" );
        return height*wieght;
    }
}