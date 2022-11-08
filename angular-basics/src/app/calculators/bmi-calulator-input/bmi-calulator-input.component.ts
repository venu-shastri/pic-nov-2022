import { Component, OnInit,EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-bmi-calulator-input',
  templateUrl: './bmi-calulator-input.component.html',
  styleUrls: ['./bmi-calulator-input.component.css']
})
export class BmiCalulatorInputComponent implements OnInit {

  height:number=0;
  weight:number=0;
  
  @Output()
  onInputDataChange=new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  calculateBMI(){
   //emit
   this.onInputDataChange.emit({heightInput:this.height,weightInput:this.weight});
  }

  reset(){

  }

}
