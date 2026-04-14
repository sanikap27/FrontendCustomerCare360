import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent-navbar',
  imports: [CommonModule],
  templateUrl: './agent-navbar.html',
  styleUrl: './agent-navbar.css',
  standalone:true,
})
export class AgentNavbarComponent {
  
 showDropdown = false;

  constructor(private router: Router) {}

  toggleDropdown() {

    this.showDropdown = !this.showDropdown;

  }

  // logout() {

  //   localStorage.clear();

  //   this.router.navigate(['/login']);

  // }
goToProfile() {

  this.showDropdown = false;   // close dropdown

  this.router.navigate(['/customer-dashboard/profile']);

}
 


}
 