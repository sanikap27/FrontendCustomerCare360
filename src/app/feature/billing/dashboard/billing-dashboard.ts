import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { RouterModule } from '@angular/router';
import { BillingSidebarComponent } from '../sidebar/billing-sidebar/billing-sidebar';
import { BillingNavbarComponent } from "../billing-navbar/billing-navbar";

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, BillingSidebarComponent, BillingNavbarComponent],
  templateUrl: './billing-dashboard.html',
  styleUrl: './billing-dashboard.css',
})
// export class BillingDashboardComponent {

//   constructor(private auth: AuthService) {}

//   logout() {

//     this.auth.logout();

//   }

// }

export class BillingDashboardComponent implements OnInit {
 totalCycles = 0;
 totalBills = 0;
 totalAdjustments = 0;
 pendingBills = 0;
 billingCycles: any[] = [];
 bills: any[] = [];
 adjustments: any[] = [];
 ngOnInit() {
   // Dummy data (replace with API later)
   this.billingCycles = [
     { id: 1, service: 'Electric', start: '2026-01-01', end: '2026-01-31', status: 'Completed' },
     { id: 2, service: 'Gas', start: '2026-02-01', end: '2026-02-28', status: 'Open' }
   ];
   this.bills = [
     { id: 101, amount: 1200, due: '2026-02-10', status: 'Generated' },
     { id: 102, amount: 800, due: '2026-02-12', status: 'Pending' }
   ];
   this.adjustments = [
     { id: 1, reason: 'Overcharge', amount: -100, status: 'Approved' }
   ];
   // counts
   this.totalCycles = this.billingCycles.length;
   this.totalBills = this.bills.length;
   this.totalAdjustments = this.adjustments.length;
   this.pendingBills = this.bills.filter(b => b.status === 'Pending').length;
 }
}
