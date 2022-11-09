import { Component, OnInit } from '@angular/core';
import { BmiDataReposioryService } from 'src/app/services/bmi-data-reposiory.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  lineItems:any=[];
  constructor(private repoService:BmiDataReposioryService) {
    this.onNewHistoryEntryMade=this.onNewHistoryEntryMade.bind(this);
   }

  ngOnInit(): void {
    this.repoService.bmiHistoryObservableStream.subscribe(this.onNewHistoryEntryMade)
  }

  onNewHistoryEntryMade(data:any){
    console.log("onNewHistoryEntryMade invoked",data)
    this.lineItems.push(data);

  }

}
