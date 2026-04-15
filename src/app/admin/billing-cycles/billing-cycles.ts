import { Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BillingCycleService } from '../services/billing-cycle.service';

@Component({
  selector: 'app-billing-cycles',
  standalone: true,
  // Importing specific utilities instead of the heavy CommonModule
  imports: [FormsModule, DatePipe, NgClass],
  templateUrl: './billing-cycles.html',
  styleUrl: './billing-cycles.css',
})
export class BillingCyclesComponent implements OnInit {
  // Use modern inject function
  private readonly service = inject(BillingCycleService);

  // Use Signals for optimized reactivity
  cycles = signal<any[]>([]);

  ngOnInit(): void {
    this.loadCycles();
  }

  loadCycles(): void {
    this.service.getAll().subscribe({
      next: (res) => {
        console.log("Cycles fetched:", res);
        this.cycles.set(res);
      },
      error: (err) => console.error('Failed to load cycles', err)
    });
  }

  deleteCycle(id: number): void {
    if (!confirm('Are you sure you want to delete this billing cycle?')) return;

    this.service.delete(id).subscribe({
      next: () => {
        alert('Billing cycle deleted successfully! ✅');
        // Efficiently update the signal state without a full reload
        this.cycles.update(prev => prev.filter(c => c.billingCycleID !== id));
      },
      error: (err) => {
        console.error('Delete failed', err);
        alert('Could not delete billing cycle ❌');
      }
    });
  }
}