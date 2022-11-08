import { Component, OnInit ,Inject} from '@angular/core';
import { ConsoleLoggerService } from 'src/app/services/consoleLogger.service';
import { ILogger } from 'src/app/services/logger.contract';
import { BmiCalculatorService } from '../services/bmiCalucator.service';

@Component({
  selector: 'bmi-calc',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css'],
  providers:[{provide:BmiCalculatorService,useClass:BmiCalculatorService}]
  
})
export class BmiCalculatorComponent implements OnInit { // BmiCalculator is a God Class/object

  bmiScore:number=0;
  constructor(private calcRef:BmiCalculatorService,
    @Inject("logger")private logger:ILogger) { }

  ngOnInit(): void {
  }
  calculateBmiScore(height:any,weight:any){
    this.logger.write("BmiCalculatorComponent.calculateBMI Called");
    this.bmiScore=this.calcRef.calculateBMI(height,weight);
  }
  setCalculatorInput(data:any){
    this.calculateBmiScore(data.heightInput,data.weightInput);
  }


  

}
