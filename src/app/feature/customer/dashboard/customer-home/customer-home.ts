import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Sidebar } from "../../../../shared/components/sidebar/sidebar";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../../environment/environment';
@Component({

  selector: 'app-customer-home',

  templateUrl: './customer-home.html',

  styleUrls: ['./customer-home.css'],
  imports: [Sidebar, CommonModule, FormsModule]

})

export class CustomerHomeComponent implements OnInit {

  complaints: any[] = [];

  newComplaint: string = '';

  counts = {

    services: 0,

    bills: 0,

    complaints: 0

  };
  billsCount: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.loadDashboard();

  }

  loadDashboard() {

    this.getComplaints();

    this.getServices();
    this.loadBills();
  }

  // GET complaints
  getComplaints() {

    this.http.get<any[]>(`${environment.apiUrl}/Complaint/my`)

      .subscribe({

        next: (res) => {

          console.log("Complaints:", res);

          this.complaints = res;

          this.counts.complaints = res.length;

        },

        error: (err) => {

          console.error("ERROR:", err);

        }

      });

  }



  // MOCK counts (you can replace with API later)

  getServices() {

    this.http.get<any[]>(`${environment.apiUrl}/ServiceRequest`, {



    })

      .subscribe(res => {

        console.log("Services:", res);

        this.counts.services = res.length; // ✅ REAL COUNT

      });

  }

  loadBills() {

    this.http.get<any[]>(`${environment.apiUrl}/Bill/my`)

      .subscribe({
        next: (res) => {
          console.log("Bills:", res);   // 👈 debug
          this.counts.bills = res.length;
        },
        error: (err) => {
          console.error("Bill API Error:", err);  // 👈 see error
        }
      });
  }


}
