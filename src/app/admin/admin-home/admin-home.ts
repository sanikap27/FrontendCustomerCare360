import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CustomerService } from '../services/customer.services';
import { BillService } from '../services/bill.service';
import { ComplaintService } from '../services/complaint.service';
import { NotificationService } from '../services/notification.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-home',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './admin-home.html',
  styleUrl: './admin-home.css',
})


export class AdminHomeComponent implements OnInit {

  adminName = '';

  adminEmail = '';

  totalCustomers = 0;

  totalBills = 0;

  totalComplaints = 0;

  totalNotifications = 0;

  notifications: any[] = [];

  constructor(

    private router: Router,

    private customerService: CustomerService,

    private billService: BillService,

    private complaintService: ComplaintService,

    private notificationService: NotificationService

  ) {}

  ngOnInit() {

    this.getAdminDetails();

    // this.loadNotifications();

  }

  // 🔹 Get Admin from Token

  getAdminDetails() {

    const token = localStorage.getItem('token');

    if (token) {

      const payload = JSON.parse(atob(token.split('.')[1]));

      this.adminName = payload["unique_name"] || "Admin";

      this.adminEmail = payload["email"] || "";

    }

  }

  // 🔹 Load Stats

  loadStats() {

    this.customerService.getCustomers().subscribe((res: any) => {

      this.totalCustomers = res.data?res.data.length:res.length;

    });

    this.billService.getAllBills().subscribe((res: any) => {

      this.totalBills = res.data?res.data.length:res.length;

    });

    this.complaintService.getComplaints().subscribe((res: any) => {

      this.totalComplaints = res.data?res.data.length:res.length;

    });

    this.notificationService.getAllNotifications().subscribe((res: any) => {

      this.totalNotifications = res.data?res.data.length:res.length;

    });

  }

  // 🔹 Load Notifications

  loadNotifications() {

    this.notificationService.getAllNotifications().subscribe((res: any) => {

      this.notifications = res;

    });

  }

  // 🔹 Navigation

  goTo(path: string) {

    this.router.navigate(['/admin/' + path]);

  }

}
 