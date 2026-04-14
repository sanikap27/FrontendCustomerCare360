import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { BillingCycleService } from '../services/billing-cycle.service';

@Component({
  selector: 'app-billing-cycles',
  imports: [CommonModule,FormsModule],
  templateUrl: './billing-cycles.html',
  styleUrl: './billing-cycles.css',
})


export class BillingCyclesComponent implements OnInit {

  cycles: any[] = [];

  constructor(private service: BillingCycleService) {}

  ngOnInit() {

    this.loadCycles();

  }

  loadCycles() {

    this.service.getAll().subscribe(res => {

      this.cycles = res;

    });

  }

  deleteCycle(id: number) {

    this.service.delete(id).subscribe(() => {
      alert('Billing cycle deleted successfully!');

      this.cycles = this.cycles.filter(c => c.billingCycleID !== id);

    });

  }

}
 