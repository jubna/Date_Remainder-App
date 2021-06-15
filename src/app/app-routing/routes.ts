import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ShowEventsComponent } from '../show-events/show-events.component';


export const routes: Routes = [
    { path: '',  component: LoginComponent },
     {path:'register',  component:RegisterComponent},
     {path:'dashboard',  component:DashboardComponent},
     {path:'showEvents',  component:ShowEventsComponent}
  ];