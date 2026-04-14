import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-agent-sidebar',
  imports: [RouterLink],
  templateUrl: './agent-sidebar.html',
  styleUrl: './agent-sidebar.css',
})
export class AgentSidebarComponent {
     logout() {

  localStorage.removeItem('token');

  window.location.href = '/login';

}
}
