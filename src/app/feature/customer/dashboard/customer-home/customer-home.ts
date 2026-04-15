import { Component, OnInit, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from "../../../../shared/components/sidebar/sidebar";
import { environment } from '../../../../../environment/environment';

@Component({
  selector: 'app-customer-home',
  standalone: true,
  imports: [Sidebar, CommonModule, FormsModule],
  templateUrl: './customer-home.html',
  styleUrls: ['./customer-home.css']
})
export class CustomerHomeComponent implements OnInit {
  // Inject HttpClient using the modern inject() function
  private readonly http = inject(HttpClient);

  // Use a Signal for the dashboard counts
  counts = signal({
    services: 0,
    bills: 0,
    complaints: 0
  });

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard(): void {
    this.getComplaints();
    this.getServices();
    this.loadBills();
  }

  getComplaints(): void {
    this.http.get<any[]>(`${environment.apiUrl}/Complaint/my`).subscribe({
      next: (res) => {
        this.counts.update(prev => ({ ...prev, complaints: res.length }));
      },
      error: (err) => console.error("Complaint API Error:", err)
    });
  }

  getServices(): void {
    this.http.get<any[]>(`${environment.apiUrl}/ServiceRequest`).subscribe({
      next: (res) => {
        this.counts.update(prev => ({ ...prev, services: res.length }));
      },
      error: (err) => console.error("Services API Error:", err)
    });
  }

  loadBills(): void {
    this.http.get<any[]>(`${environment.apiUrl}/Bill/my`).subscribe({
      next: (res) => {
        this.counts.update(prev => ({ ...prev, bills: res.length }));
      },
      error: (err) => console.error("Bill API Error:", err)
    });
  }
}