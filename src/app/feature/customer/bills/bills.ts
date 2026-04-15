import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillDTO } from '../../auth/models/BillDTO';
import { Bill as BillService } from '../../../core/services/bill';

@Component({
  selector: 'app-customer-bills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bills.html',
  styleUrls: ['./bills.css']
})
export class BillsComponent implements OnInit {
  // Use Signals for optimized reactivity
  private readonly billService = inject(BillService);
  
  bills = signal<BillDTO[]>([]);
  loading = signal<boolean>(false);

  ngOnInit(): void {
    this.loadBills();
  }

  loadBills(): void {
    this.loading.set(true);

    this.billService.getCustomerBills().subscribe({
      next: (data) => {
        console.log("Bills fetched:", data);
        this.bills.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        alert('Failed to load bills ❌');
        this.loading.set(false);
      }
    });
  }
}