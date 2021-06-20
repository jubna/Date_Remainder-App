import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.css']
})
export class ShowEventsComponent implements OnInit {
userEvents="";
date=""
msg=""
indexNum=""

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
  dltEvent(eventDet){
    var email=localStorage.getItem("email");
   
    this.service.dltEvent(email,eventDet)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        location.reload();
      }
    },
    (result)=>{
      alert(result.error.message)
    })
  }
  editRow(indexNo:any,eventDate:any,eventdet:any){
    document.getElementById("update").style.display="block";
    this.indexNum=indexNo
    this.date=eventDate
     this.msg=eventdet
     
  }
  updateEvent(indexNum:any,Edate:any,EMsg:any){
    var email=localStorage.getItem("email");
    console.log(email);
    
    this.service.editEvent(email,indexNum,Edate,EMsg)
    .subscribe((result:any)=>{
     if(result){
       alert(result.message)
       location.reload();
     }
     },
     (result)=>{
     alert(result.error.message)
    
    })
   }
  
}
