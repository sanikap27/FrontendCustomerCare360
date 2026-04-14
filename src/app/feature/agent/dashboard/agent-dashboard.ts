import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgentNavbarComponent} from './agent-navbar/agent-navbar';
import { AgentSidebarComponent } from './agent-sidebar/agent-sidebar';
import { AgentHomeComponent } from './agent-home/agent-home';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,FormsModule,RouterModule,AgentNavbarComponent,AgentSidebarComponent,AgentHomeComponent],
  templateUrl: './agent-dashboard.html',
  styleUrl: './agent-dashboard.css',
})

export class AgentDashboardComponent {

  constructor(private auth: AuthService) {}

  logout() {

    this.auth.logout();

  }

}