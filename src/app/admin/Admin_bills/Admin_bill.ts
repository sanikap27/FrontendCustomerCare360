import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule, DatePipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BillService } from '../services/bill.service';

@Component({
  selector: 'app-bill',
  standalone: true,
  // Modern practice: Import only what you need for better tree-shaking
  imports: [FormsModule, DatePipe, NgClass], 
  templateUrl: './Admin_bill.html',
  styleUrl: './Admin_bill.css',
})
export class Admin_BillsComponent implements OnInit {
  // Use inject for cleaner dependency management
  private readonly billService = inject(BillService);

  // Initialize bills as a signal
  bills = signal<any[]>([]);

  ngOnInit(): void {
    this.loadBills();
  }

  loadBills(): void {
    this.billService.getAllBills().subscribe({
      next: (res) => {
        console.log("Admin Bills Loaded:", res);
        this.bills.set(res);
      },
      error: (err) => console.error("Error fetching admin bills:", err)
    });
  }
}