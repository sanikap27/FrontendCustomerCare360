import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing-navbar',
  imports: [CommonModule],
  templateUrl: './billing-navbar.html',
  styleUrl: './billing-navbar.css',
})


export class BillingNavbarComponent {

  

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
 