import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'app-signup'
    ,templateUrl:'./signup.component.html'
})
export class SignupComponent{

    userName:string="";
    password:string="";
    email:string="";
    constructor(private pathService:Router){}

    signup(){
       //WebApi -> Register User
       //redirect user -> home path 
       this.pathService.navigate(["home"]);
    }

    clear(){

    }
}