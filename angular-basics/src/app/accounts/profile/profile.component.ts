import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  activeUserName:string | null="";
  constructor(private activeRoute:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((p)=>{
      this.activeUserName=p.get("activeuser");
    });
  }

}
