import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./accounts/login/login.component";
import { SignupComponent } from "./accounts/signup/signup.component";
import { HomeComponent } from "./home/home.component";

let pathConfiguration:Routes=[
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:HomeComponent,children:[
        {path:"login",component:LoginComponent},
        {path:"signup",component:SignupComponent}
    ]}
];

@NgModule({
    imports:[RouterModule.forRoot(pathConfiguration)],
    exports:[RouterModule]

})
export class AppRoutingModule
{

}