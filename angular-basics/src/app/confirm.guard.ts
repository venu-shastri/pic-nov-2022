import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PanelComponent } from './panel/panel.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanDeactivate<PanelComponent> {
  canDeactivate(component: PanelComponent,
     currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot,
       nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return window.confirm("Are Sure You want to exit?");
  }
 
  
}
