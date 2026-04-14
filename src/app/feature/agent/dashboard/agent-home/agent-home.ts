import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DashboardService } from '../Services/agent-dashboard.service';



@Component({

  selector: 'app-agent-home',

  templateUrl: './agent-home.html',

  styleUrls: ['./agent-home.css']

})

export class AgentHomeComponent implements OnInit {

  // ✅ Counts for all modules

  customersCount = 0;

  requestsCount = 0;

  ordersCount = 0;

  premisesCount = 0;

  adjustmentsCount = 0;

  complaintsCount = 0;

  notificationsCount = 0;

  constructor(

    private service: DashboardService,

    public router: Router

  ) {}

  ngOnInit(): void {

    this.loadDashboard();

  }

  // ✅ Load all counts

  loadDashboard(): void {

    this.service.getCustomers().subscribe({

      next: (res) => this.customersCount = res.length,

      error: (err) => console.error('Customers error:', err)

    });

    this.service.getRequests().subscribe({

      next: (res) => this.requestsCount = res.length,

      error: (err) => console.error('Requests error:', err)

    });

    this.service.getOrders().subscribe({

      next: (res) => this.ordersCount = res.length,

      error: (err) => console.error('Orders error:', err)

    });

    this.service.getPremises().subscribe({

      next: (res) => this.premisesCount = res.length,

      error: (err) => console.error('Premises error:', err)

    });

    this.service.getAdjustments().subscribe({

      next: (res) => this.adjustmentsCount = res.length,

      error: (err) => console.error('Adjustments error:', err)

    });

    this.service.getComplaints().subscribe({

      next: (res) => this.complaintsCount = res.length,

      error: (err) => console.error('Complaints error:', err)

    });

    this.service.getNotifications().subscribe({

      next: (res) => this.notificationsCount = res.length,

      error: (err) => console.error('Notifications error:', err)

    });

  }

  // ✅ Navigation methods (optional but clean)

  goToCustomers() {

    this.router.navigate(['/agent/customers']);

  }

  goToRequests() {

    this.router.navigate(['/agent/service-request']);

  }

  goToOrders() {

    this.router.navigate(['/agent/orders']);

  }

  goToPremises() {

    this.router.navigate(['/agent/premises']);

  }

  goToAdjustments() {

    this.router.navigate(['/agent/adjustments']);

  }

  goToComplaints() {

    this.router.navigate(['/agent/complaints']);

  }

  goToNotifications() {

    this.router.navigate(['/agent/notifications']);

  }

}
 