import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common'; // Import DatePipe directly for signals-based flow
import { ComplaintService } from '../../../core/services/complaint';

@Component({
  selector: 'app-complaints',
  standalone: true,
  // We can often drop CommonModule and just import specific pipes/directives needed
  imports: [FormsModule, DatePipe],
  templateUrl: './complaints.html',
  styleUrls: ['./complaints.css']
})
export class ComplaintsComponent implements OnInit {
  // Inject service using the modern inject() function
  private readonly service = inject(ComplaintService);

  // Use Signals for state
  category = signal<string>('');
  description = signal<string>('');
  complaints = signal<any[]>([]);

  ngOnInit(): void {
    this.getComplaints();
  }

  getComplaints(): void {
    this.service.getMyComplaints().subscribe({
      next: (res: any) => {
        console.log("Complaints fetched:", res);
        this.complaints.set(res); // Update signal value
      },
      error: (err) => console.error(err)
    });
  }

  submitComplaint(): void {
    // Access signal values using ()
    const currentCategory = this.category();
    const currentDescription = this.description();

    if (!currentCategory || !currentDescription) {
      alert('Please fill all fields');
      return;
    }

    const data = {
      category: currentCategory,
      description: currentDescription
    };

    this.service.createComplaint(data).subscribe({
      next: () => {
        alert('Complaint submitted successfully ✅');
        
        // Reset signals
        this.category.set('');
        this.description.set('');
        
        // Refresh the list
        this.getComplaints();
      },
      error: (err) => {
        console.error(err);
        alert('Failed to submit complaint ❌');
      }
    });
  }
}