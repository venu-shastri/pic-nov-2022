import { Component } from "@angular/core";

@Component({
    selector:'app-signup'
    ,templateUrl:'./signup.component.html'
})
export class SignupComponent{

    userName:string="";
    password:string="";
    email:string="";

    signup(){

    }

    clear(){

    }
}