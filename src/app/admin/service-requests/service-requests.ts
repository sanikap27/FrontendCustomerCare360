import { Component, OnInit } from '@angular/core';
import { ServiceRequestService } from '../services/service-request.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-requests',
  imports: [FormsModule,CommonModule],
  templateUrl: './service-requests.html',
  styleUrl: './service-requests.css',
})
export class ServiceRequestsComponent implements OnInit {
 requests: any[] = [];
 newRequest = {
   requestType: '',
   priority: 'Medium'
 };
 constructor(private service: ServiceRequestService) {}
 ngOnInit() {
   this.loadRequests();
 }
 loadRequests() {
   this.service.getAllRequests().subscribe((res: any) => {
     this.requests = res;
   });
 }

 deleteRequest(id: number) {
   this.service.deleteRequest(id).subscribe(() => {
    alert('Service request deleted successfully!');
     // ✅ instant UI update
     this.requests = this.requests.filter(r => r.serviceRequestId !== id);
   });
 }
 updateRequest(request: any) {

  this.service.updateRequest(request.serviceRequestId, request)

    .subscribe(() => {

      alert("Updated successfully");

      this.loadRequests(); // refresh

    });

}
 
}