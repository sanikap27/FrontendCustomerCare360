import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { CustomerService } from '../services/customer.services';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class CustomersComponent implements OnInit {
  private readonly service = inject(CustomerService);

  // Use Signals for state management
  customers = signal<Customer[]>([]);
  isEdit = signal<boolean>(false);
  
  // Signal for the form object
  form = signal<Customer>({
    customerId: 0,
    userId: 0,
    customerType: '',
    contactInfo: '',
    status: ''
  });

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.service.getCustomers().subscribe({
      next: (res) => this.customers.set(res),
      error: (err) => console.error('Failed to load customers', err)
    });
  }

  // Helper to update specific fields in the form signal
  updateField(field: keyof Customer, value: any): void {
    this.form.update(prev => ({ ...prev, [field]: value }));
  }

  saveCustomer(): void {
    const currentForm = this.form();
    const request$ = this.isEdit() 
      ? this.service.updateCustomer(currentForm.customerId, currentForm)
      : this.service.addCustomer(currentForm);

    request$.subscribe({
      next: () => {
        alert(this.isEdit() ? 'Customer updated! ✅' : 'Customer added! ✅');
        this.loadCustomers();
        this.resetForm();
      },
      error: (err) => console.error('Save failed', err)
    });
  }

  editCustomer(c: Customer): void {
    this.form.set({ ...c });
    this.isEdit.set(true);
  }

  deleteCustomer(id: number): void {
    if (!confirm('Are you sure?')) return;
    
    this.service.deleteCustomer(id).subscribe({
      next: () => {
        alert('Customer deleted successfully! 🗑️');
        // Update signal locally for instant UI feedback
        this.customers.update(prev => prev.filter(cust => cust.customerId !== id));
      },
      error: (err) => console.error('Delete failed', err)
    });
  }

  resetForm(): void {
    this.form.set({
      customerId: 0,
      userId: 0,
      customerType: '',
      contactInfo: '',
      status: ''
    });
    this.isEdit.set(false);
  }
}