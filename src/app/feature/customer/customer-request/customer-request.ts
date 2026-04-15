import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgClass } from '@angular/common'; // Precise imports
import { RequestService } from '../../../core/services/request';
import { RequestDTO } from '../../auth/models/CreateRequestDto';

@Component({
  selector: 'app-customer-request',
  standalone: true,
  // CommonModule is replaced by specific pipes/directives for better tree-shaking
  imports: [FormsModule, DatePipe, NgClass],
  templateUrl: './customer-request.html',
  styleUrl: './customer-request.css'
})
export class CustomerRequestComponent implements OnInit {
  // Inject service using modern inject() function
  private readonly service = inject(RequestService);

  // Use Signals for state management
  requests = signal<any[]>([]);
  loading = signal<boolean>(false);
  
  // Signal for form object
  requestForm = signal<RequestDTO>({
    requestType: '',
    priority: ''
  });

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests(): void {
    this.loading.set(true);
    this.service.getRequests().subscribe({
      next: (data) => {
        console.log("API DATA:", data);
        this.requests.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        alert('Failed to load requests');
        this.loading.set(false);
      }
    });
  }

  submitRequest(): void {
    const currentForm = this.requestForm();
    
    if (!currentForm.requestType || !currentForm.priority) {
      alert("Fill all fields properly ❗");
      return;
    }

    this.loading.set(true);
    
    const payload = {
      ...currentForm,
      status: 'Pending'
    };

    this.service.createRequest(payload).subscribe({
      next: () => {
        alert('Request Created Successfully ✅');
        this.loading.set(false);
        
        // Reset form signal
        this.requestForm.set({ requestType: '', priority: '' });
        
        // Refresh list
        this.loadRequests();
      },
      error: (err) => {
        console.error("FULL ERROR:", err);
        alert('Write Service Request ❌');
        this.loading.set(false);
      }
    });
  }

  // Helper method for Signal two-way binding replacement
  updateField(field: keyof RequestDTO, value: string): void {
    this.requestForm.update(prev => ({ ...prev, [field]: value }));
  }
}