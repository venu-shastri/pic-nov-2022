import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-bmi-calulator-result',
  templateUrl: './bmi-calulator-result.component.html',
  styleUrls: ['./bmi-calulator-result.component.css']
})
export class BmiCalulatorResultComponent implements OnInit {

  @Input()
  bmiValue:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
