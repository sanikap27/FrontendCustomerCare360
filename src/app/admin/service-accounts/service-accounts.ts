import { Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceAccount } from '../models/service-account.model';
import { ServiceAccountService } from '../services/service-account.service';

@Component({
  selector: 'app-service-account',
  standalone: true,
  // Specific imports instead of CommonModule for better optimization
  imports: [FormsModule, DatePipe, NgClass],
  templateUrl: './service-accounts.html',
  styleUrl: './service-accounts.css',
})
export class ServiceAccountsComponent implements OnInit {
  private readonly service = inject(ServiceAccountService);

  // Use signals for optimized change detection
  accounts = signal<ServiceAccount[]>([]);
  
  // Signal for the form object
  newAccount = signal<ServiceAccount>({
    serviceAccountId: 0,
    customerId: 0,
    serviceType: '',
    startDate: '',
    endDate: '',
    status: ''
  });

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts(): void {
    this.service.getAll().subscribe({
      next: (res) => this.accounts.set(res),
      error: (err) => console.error('Failed to fetch service accounts', err)
    });
  }

  // Helper to update signal properties for two-way binding
  updateField(field: keyof ServiceAccount, value: any): void {
    this.newAccount.update(prev => ({ ...prev, [field]: value }));
  }

  addAccount(): void {
    const payload = this.newAccount();
    this.service.create(payload).subscribe({
      next: () => {
        alert("Account added successfully! ✅");
        this.loadAccounts();
        // Reset form signal
        this.newAccount.set({
          serviceAccountId: 0,
          customerId: 0,
          serviceType: '',
          startDate: '',
          endDate: '',
          status: 'Active'
        });
      },
      error: (err) => console.error('Create failed', err)
    });
  }

  deleteAccount(id: number): void {
    if (!confirm('Are you sure you want to delete this account?')) return;

    this.service.delete(id).subscribe({
      next: () => {
        alert("Deleted successfully 🗑️");
        // Efficient local update to the signal list
        this.accounts.update(prev => prev.filter(a => a.serviceAccountId !== id));
      },
      error: (err) => console.error('Delete failed', err)
    });
  }
}