import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
  user=localStorage.getItem("name");
  addRemainderForm= this.fb.group({ 
    date:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    event:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private fb:FormBuilder, private service:ServicesService,private router:Router) { }

  ngOnInit(): void {
  }
  
  addRemainder(){
    var date=this.addRemainderForm.value.date;
     var event=this.addRemainderForm.value.event;
    var email=localStorage.getItem("email");
     this.service.addRemainder(email,date,event)
     .subscribe((result:any)=>{
     if(result){
      alert(result.message)
    }
  },
  (result)=>{
    alert(result.error.message)
  }
     )
     
     /* if(result){
       alert("saved")
     }
     else{
       alert("cant save")
     } */
  }

  showEvents(){
   
        this.router.navigateByUrl("showEvents")
     
  }
}
