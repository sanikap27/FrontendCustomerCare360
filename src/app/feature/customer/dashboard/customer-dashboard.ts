import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';
import { SidebarComponent } from "../components/sidebar/sidebar";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "../../../shared/navbar/navbar";
import { environment } from '../../../../environment/environment';

@Component({
  selector: 'app-customer-dashboard',
  imports: [FormsModule, SidebarComponent, RouterOutlet, NavbarComponent],
  templateUrl: './customer-dashboard.html',
  styleUrl: './customer-dashboard.css',
})



export class CustomerDashboardComponent implements OnInit {

 serviceAccounts: any[] = [];
 premises: any[] = [];
 bills: any[] = [];
 complaints: any[] = [];
 newComplaint = {
   description: ''
 };
 baseUrl = environment.apiUrl;
 constructor(private http: HttpClient) {}
 ngOnInit() {
   this.loadData();
 }
 loadData() {
   this.http.get(`${this.baseUrl}/serviceaccount`)
     .subscribe((res: any) => this.serviceAccounts = res);
   this.http.get(`${this.baseUrl}/premise`)
     .subscribe((res: any) => this.premises = res);
   this.http.get(`${this.baseUrl}/bill`)
     .subscribe((res: any) => this.bills = res);
   this.http.get(`${this.baseUrl}/complaint`)
     .subscribe((res: any) => this.complaints = res);
 }
 createComplaint() {
   this.http.post(`${this.baseUrl}/complaint`, this.newComplaint)
     .subscribe(() => {
       alert('Complaint Created');
       this.newComplaint.description = '';
       this.loadData();
     });
 }

 logout() {

  localStorage.removeItem('token');

  window.location.href = '/login';

}
 
}