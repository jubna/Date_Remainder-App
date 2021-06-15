import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.css']
})
export class ShowEventsComponent implements OnInit {
userEvents=""

  constructor( private service:ServicesService) { 

    var email=localStorage.getItem("email");
    this.service.showEvents(email)
    .subscribe((result:any)=>{
      if(result){
        this.userEvents=result.message
      }
    },
    (result)=>{
      alert(result.error.message)
    })
    
  }
  
  
  ngOnInit(): void {
  }
  
}
