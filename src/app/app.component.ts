import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { AppointmentstatusComponent } from './appointmentstatus/appointmentstatus.component';
import { ProfileComponent } from './profile/profile.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterLink, NavbarComponent, AppointmentstatusComponent,ProfileComponent]
})
export class AppComponent {
  title = 'HealthCare';
}
