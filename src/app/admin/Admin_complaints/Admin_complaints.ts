import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../services/complaint.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-Admin_complaints',
  imports: [CommonModule,FormsModule],
  templateUrl: './Admin_complaints.html',
  styleUrl: './Admin_complaints.css',
})

export class Admin_ComplaintsComponent implements OnInit {
 complaints: any[] = [];
 message: string = '';
 constructor(private service: ComplaintService) {}
 ngOnInit() {
   this.loadComplaints();
 }
 loadComplaints() {
   this.service.getComplaints().subscribe(res => {
     this.complaints = res;
   });
 }
 updateComplaint(c: any) {
   this.service.updateComplaint(c.complaintId, c).subscribe((res: any) => {
    alert('Complaint updated successfully!');
     this.message = res.message;
     setTimeout(() => this.message = '', 3000);
   });
 }
 deleteComplaint(id: number) {
   this.service.deleteComplaint(id).subscribe((res: any) => {
    alert('Complaint deleted successfully!');
     this.message = res.message;
     this.complaints = this.complaints.filter(c => c.complaintId !== id);
     setTimeout(() => this.message = '', 3000);
   });
 }
}