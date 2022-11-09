import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BmiDataReposioryService {

  private bmiDataHistory:any=[];
 private bmiHistoryStream=new Subject<any>();
 bmiHistoryObservableStream=this.bmiHistoryStream.asObservable();
  constructor() { }
  createNew(bmiData:any){
    this.bmiDataHistory.push(bmiData);
    this.bmiHistoryStream.next(bmiData);
  }
}
