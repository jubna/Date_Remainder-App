import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  options={
    withCredentials: true
  }
  
  UserDetails:any = {
    "userone@mail.com": {  email:"userone@mail.com" ,username: "userone", password: "userone" ,events:[]},
    "usertwo@mail.com" :{   email:"userone@mail.com", username: "usertwo", password: "usertwo" ,events:[]},
  
  };
  constructor(private http:HttpClient) { }

  login(email: string,password: any){
    const data={
      email,
      password
      }
  
     return this.http.post("http://localhost:8080/login/",data,this.options);
    /* var users=this.UserDetails;
    
    if(email in users) {
      if(username==users[email]["username"] && password==users[email]["password"]){
        return 1;
       }
     else {
     return -1;
     }
   }
   else{
     return 0;
   } */
 }

 register(email: any,username: any,password: any){

  const data={
    email,
    username,
    password
    }

   return this.http.post("http://localhost:8080/register/",data);

/* 
   var users=this.UserDetails;
   if(email in users){
     return false
   }
   else{
    users[email]={
      
      username,
      password,
      email
    }
    return true;
   } */
 }

 addRemainder(email,date:any,eventMsg:any){

  const data={
    email,
    date,
    eventMsg
      }

   return this.http.post("http://localhost:8080/addRemainder/",data,this.options);
  /* var users=this.UserDetails;
  if(email in users) {
    users[email]["events"].push({date:date,event:event});
   console.log(email,users[email])
    console.log(date,event);
   localStorage.setItem("users[email]['events']",JSON.stringify(users[email]['events']))
   // console.log(users[email]['events'])
   // console.log(users[email]['events']['date'],users[email]['events']['event']);
    return true;
  }
else{
  return false;
} */
 }

 DisplayRemainder(email){
   
  const data={
    email
  }
    return this.http.post("http://localhost:8080/DisplayRemainder/",data,this.options);
 }
 dltEvent(email:any,eventDet:any){
  const data={
    email,
    eventDet
      }
      return this.http.post("http://localhost:8080/dltEvent/",data,this.options);
 }

editEvent(email,indexNum,Edate,EMsg){
  const data={
    email,
    indexNum,
    Edate,
    EMsg
      }
      return this.http.post("http://localhost:8080/editEvent/",data,this.options);
 }
 showEvents(email){
  const data={
    email
      }
   return this.http.post("http://localhost:8080/showEvents/",data,this.options);
 }

}


