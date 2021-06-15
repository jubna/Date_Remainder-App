import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm=this.fb.group({
    /*  userid:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]], */
    username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]] ,
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    email:['',[Validators.required,Validators.email]]
   /*  email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]] */
  })
  constructor( private fb:FormBuilder, private service:ServicesService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    if(this.registerForm.valid){
      /*  var userid=this.registerForm.value.userid; */
      var username=this.registerForm.value.username;
      var password=this.registerForm.value.password;
      var email=this.registerForm.value.email;
     this.service.register(email,username,password)
     .subscribe((result:any)=>{
       if(result){
         alert(result.message);
         this.router.navigateByUrl('');
       }
     },
     (result)=>{
       alert(result.error.message);
     }
     )
      /* if(result){
        alert("Successfully registerd");
        this.router.navigateByUrl('');
      }
      else{
        alert("User exist..pls login")
      } */
    }
   else{
     alert("Invalid form")
   }
  }
}
