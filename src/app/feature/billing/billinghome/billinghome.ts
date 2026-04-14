import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { BillService } from '../services/bill.service';

import { AdjustmentService } from '../services/adjustment.service';

@Component({

  selector: 'app-billing-home',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './billinghome.html',

  styleUrls: ['./billinghome.css']

})

export class BillingHomeComponent implements OnInit {

  bills: any[] = [];

  adjustments: any[] = [];

  totalBills = 0;

  totalAmount = 0;

  totalAdjustments = 0;

  approvedAdjustments = 0;

  constructor(

    private billService: BillService,

    private adjustmentService: AdjustmentService

  ) {}

  ngOnInit() {

    this.loadData();

  }

  loadData() {

    // Bills

    this.billService.getAll().subscribe(res => {

      this.bills = res;

      this.totalBills = res.length;

      this.totalAmount = res.reduce((sum: number, b: any) => sum + b.amount, 0);

    });

    // Adjustments

    this.adjustmentService.getAll().subscribe(res => {

      this.adjustments = res;

      this.totalAdjustments = res.length;

      this.approvedAdjustments =

        res.filter((a: any) => a.status === 'Approved').length;

    });

  }

}
 