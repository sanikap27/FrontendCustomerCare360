import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../../../environment/environment';

@Injectable({

  providedIn: 'root'

})

export class DashboardService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // ✅ Customers

  getCustomers(): Observable<any[]> {

    return this.http.get<any[]>(`${this.baseUrl}/Customer`);

  }

  // ✅ Service Requests (Agent/Admin)

  getRequests(): Observable<any[]> {

    return this.http.get<any[]>(`${this.baseUrl}/ServiceRequest/all`);

  }

  // ✅ Service Orders (Agent)

  getOrders(): Observable<any[]> {

    return this.http.get<any[]>(`${this.baseUrl}/ServiceOrder`);

  }

  // ✅ Premises (Agent/Admin)

  getPremises(): Observable<any[]> {

    return this.http.get<any[]>(`${this.baseUrl}/Premise`);

  }

  // ✅ Adjustments (Agent/Billing)

  getAdjustments(): Observable<any[]> {

    return this.http.get<any[]>(`${this.baseUrl}/Adjustment`);

  }

  // ✅ Complaints (Admin/Agent/Customer)

  getComplaints(): Observable<any[]> {

    return this.http.get<any[]>(`${this.baseUrl}/Complaint`);

  }

  // ✅ Notifications ⚠️ (Admin only in your backend)

  getNotifications(): Observable<any[]> {

    return this.http.get<any[]>(`${this.baseUrl}/Notification`);

  }

}
 