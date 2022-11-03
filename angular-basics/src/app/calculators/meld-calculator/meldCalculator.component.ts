//Logic

import {Component,ViewChild} from '@angular/core'
@Component({
    templateUrl:'./meldCalculator.component.html',
    selector:'meld-calc'
})
export class MeldCalculatorComponent{
    creatinine:number=0;
    total_bilirubin:number=0;
    INR:number=0;
    meldScore:number=0;


   

    constructor(){

    }
    setCreatinine(data:string){
console.log("setCreatinine Invoked", data);
this.creatinine=parseInt(data);
    }
    setBilirubin(data:string){

        console.log("setBilirubin Invoked",data);
        this.total_bilirubin=parseInt(data);
    }
    setINR(data:string){
        console.log("setINR Invoked");
        this.INR=parseInt(data)
    }

    setSodium(data:string){
    
        console.log("setSodium Invoked",data);
    }

    calculateMeldScore(){
        this. meldScore=9.57 * Math.log(this.creatinine) + 3.78 * Math.log(this.total_bilirubin) + 11.2 * Math.log (this.INR) + 6.43;
    }

    reset(){
       this. creatinine=0;
       


       this. total_bilirubin=0;
        this.INR=0;
        this.meldScore=0;
    }
}