import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./accounts/login/login.component";
import { SignupComponent } from "./accounts/signup/signup.component";
import { AuthorizeDashboardGuard } from "./authorize-dashboard.guard";
import { CalculatorcardsComponent } from "./calculators/calculatorcards/calculatorcards.component";
import { ConfirmGuard } from "./confirm.guard";
import { HomeComponent } from "./home/home.component";
import { PanelComponent } from "./panel/panel.component";

let pathConfiguration:Routes=[
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:HomeComponent,children:[
        {path:"login",component:LoginComponent},
        {path:"signup",component:SignupComponent}
    ]},
    {
    path:"dashboard/:activeuser",component:PanelComponent,
    canActivate:[AuthorizeDashboardGuard],canDeactivate:[ConfirmGuard],
    children:[
        {path:"calculators",loadChildren:()=>import('./calculators/calculators.module').then(m=>m.CalculatorsModule)},
        {path:"articles",loadChildren:()=>import('./calculators/calculators.module').then(m=>m.CalculatorsModule)},
        {path:"appointments",loadChildren:()=>import('./calculators/calculators.module').then(m=>m.CalculatorsModule)}
    ]}
    
];

@NgModule({
    imports:[RouterModule.forRoot(pathConfiguration)],
    exports:[RouterModule]

})
export class AppRoutingModule
{

}