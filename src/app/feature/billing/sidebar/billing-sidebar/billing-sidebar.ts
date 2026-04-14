import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-billing-sidebar',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './billing-sidebar.html',
  styleUrl: './billing-sidebar.css',
})
export class BillingSidebarComponent {
     logout() {

  localStorage.removeItem('token');

  window.location.href = '/login';

}
}
