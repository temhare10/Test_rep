import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-appointmentstatus',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './appointmentstatus.component.html',
  styleUrl: './appointmentstatus.component.css'
})
export class AppointmentstatusComponent {

}
