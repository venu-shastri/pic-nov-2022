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
   // this.onNewHistoryEntryMade=this.onNewHistoryEntryMade.bind(this);
   }

  ngOnInit(): void {
    
  //  let _this=this;//closure
  //   function onNewHistoryEntryMade(data:any){
  //     console.log("onNewHistoryEntryMade invoked",data)
  //     _this.lineItems.push(data);
  
  //   }
    this.repoService.bmiHistoryObservableStream.subscribe(
      (data:any)=>{
      this.lineItems.push(data);
    })
  }

  

}
