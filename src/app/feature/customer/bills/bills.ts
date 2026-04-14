import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BillDTO } from '../../auth/models/BillDTO';

import { Bill as BillService } from '../../../core/services/bill';
@Component({

  selector: 'app-customer-bills',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './bills.html',
  styleUrls:['./bills.css']

})

export class BillsComponent implements OnInit {

  bills: BillDTO[] = [];

  loading = false;

  constructor(private service: BillService) {}

  ngOnInit(): void {

    this.loadBills();

  }

  loadBills() {

    this.loading = true;

    this.service.getCustomerBills().subscribe({

      next: (data) => {

        console.log("Bills:", data);

        this.bills = data;

        this.loading = false;

      },

      error: (err) => {

        console.log(err);

        alert('Failed to load bills ❌');

        this.loading = false;

      }

    });

  }

}
 