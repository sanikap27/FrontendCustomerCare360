import { Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComplaintService } from '../services/complaint.service';

@Component({
  selector: 'app-admin-complaints',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './Admin_complaints.html',
  styleUrl: './Admin_complaints.css',
})
export class Admin_ComplaintsComponent implements OnInit {
  private readonly service = inject(ComplaintService);

  // Using Signals for state
  complaints = signal<any[]>([]);
  message = signal<string>('');

  ngOnInit(): void {
    this.loadComplaints();
  }

  loadComplaints(): void {
    this.service.getComplaints().subscribe({
      next: (res) => this.complaints.set(res),
      error: (err) => console.error('Error loading complaints:', err)
    });
  }

  updateComplaint(c: any): void {
    this.service.updateComplaint(c.complaintId, c).subscribe({
      next: (res: any) => {
        alert('Complaint updated successfully! ✅');
        this.message.set(res.message || 'Updated');
        setTimeout(() => this.message.set(''), 3000);
      },
      error: (err) => console.error('Update failed:', err)
    });
  }

  deleteComplaint(id: number): void {
    if (!confirm('Are you sure you want to delete this complaint?')) return;

    this.service.deleteComplaint(id).subscribe({
      next: (res: any) => {
        alert('Complaint deleted successfully! 🗑️');
        this.message.set(res.message || 'Deleted');
        
        // Efficiently update signal by filtering out the deleted ID
        this.complaints.update(prev => prev.filter(c => c.complaintId !== id));
        
        setTimeout(() => this.message.set(''), 3000);
      },
      error: (err) => console.error('Delete failed:', err)
    });
  }
}