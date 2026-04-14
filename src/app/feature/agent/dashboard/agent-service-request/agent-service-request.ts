import { Component, OnInit } from '@angular/core';
import { ServiceRequest } from '../Models/service-request.model';
import { AgentServiceRequestService } from '../Services/agent-service-request.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-service-request',
  imports: [CommonModule,FormsModule],
  templateUrl: './agent-service-request.html',
  styleUrl: './agent-service-request.css',
})


export class AgentServiceRequestComponent implements OnInit {
 requests: ServiceRequest[] = [];
 selectedRequest: ServiceRequest | null = null;
 constructor(private service: AgentServiceRequestService) {}
 ngOnInit() {
   this.getRequests();
 }
 getRequests() {
   this.service.getRequests().subscribe({
     next: (res) => this.requests = res,
     error: (err) => console.error(err)
   });
 }
 editRequest(req: ServiceRequest) {
   this.selectedRequest = { ...req };
 }
 updateRequest() {
   if (!this.selectedRequest) return;
   this.service.updateRequest(
     this.selectedRequest.serviceRequestId,
     this.selectedRequest
   ).subscribe({
     next: () => {
       alert('Updated successfully');
       this.selectedRequest = null;
       this.getRequests();
     },
     error: (err) => console.error(err)
   });
 }

 
}
