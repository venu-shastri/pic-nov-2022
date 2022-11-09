import { ConsoleLoggerService } from "src/app/services/consoleLogger.service";
import { Injectable ,Inject} from "@angular/core";
import { ILogger } from "src/app/services/logger.contract";
import { BmiDataReposioryService } from "src/app/services/bmi-data-reposiory.service";

@Injectable()
export class BmiCalculatorService{
    constructor(@Inject("logger")private logger:ILogger,private repoService:BmiDataReposioryService){

    }

    calculateBMI(height:number,wieght:number):number{
        console.log("BmiCalculatorService.calculateBMI called" );
        let bmiValue= height*wieght;
        this.repoService.createNew({height:height,wieght:wieght,bmiValue:bmiValue,timestamp:Date.now()})
        return bmiValue;
    }
}