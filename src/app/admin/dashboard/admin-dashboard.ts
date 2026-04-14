import { Component } from '@angular/core';

import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
imports: [RouterOutlet,AdminSidebarComponent],
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css']

})

export class AdminDashboardComponent {

  constructor(private auth: AuthService) {}

  logout() {

    this.auth.logout();

  }

}
 