import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({ 
    email:['',[Validators.required,Validators.email]],
   /*  username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]] , */
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private fb:FormBuilder, private service:ServicesService,private router:Router) { }
 
  ngOnInit(): void {
  }
  

  login(){
    if(this.loginForm.valid){
    
      var email=this.loginForm.value.email;
      /* var username=this.loginForm.value.username; */
      var password=this.loginForm.value.password;
      this.service.login(email,password)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message);
          this.router.navigateByUrl("dashboard") 
          localStorage.setItem("email",email);
          localStorage.setItem("name",result.name);
          console.log(email);
        }
      },
      (result)=>{
        alert(result.error.message)
      })
    }
            /* if(result==1){
          alert("Successfully login");
          this.router.navigateByUrl("dashboard") 
          localStorage.setItem("email",email);
          console.log(email);
      }
      else if(result==-1){
        alert("Invalid username or password");
      } 
      else{
        alert("Invalid account")
      }
    }*/
    else{
      alert("Invalid Form")
    } 
  }

  register(){
      this.router.navigateByUrl("register");
  }
}
