import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AppointmentstatusComponent } from './appointmentstatus/appointmentstatus.component';
import { ProfileComponent } from './profile/profile.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';

export const routes: Routes = [
    {path:'',component: NavbarComponent},
    {path:'navbar',component: NavbarComponent},
    {path:'appointmentstatus',component:AppointmentstatusComponent},
    {path:'profile',component:ProfileComponent},
    {path:'bookappointment',component:BookappointmentComponent}
    
];
