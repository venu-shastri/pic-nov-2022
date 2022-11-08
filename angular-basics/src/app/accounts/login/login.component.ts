import { Component, OnInit ,Inject} from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ConsoleLoggerService } from 'src/app/services/consoleLogger.service';
import { ILogger } from 'src/app/services/logger.contract';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(@Inject("logger")  private logger:ILogger) {
    this.loginForm=new  FormGroup({
      userName:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    });
   }

  ngOnInit(): void {
  }
  login(){
    if(this.loginForm.valid){
    this.logger.write(this.loginForm.controls["userName"].value);
    }
  }
  clear(){
    this.loginForm.reset();
  }

}
