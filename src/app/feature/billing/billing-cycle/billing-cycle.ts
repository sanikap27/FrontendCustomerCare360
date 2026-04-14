

import { Component, OnInit } from '@angular/core';
import { BillingCycle, BillingCycleService } from '../services/billing-cycle';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({

  selector: 'app-billing-cycle',
  
  imports :[CommonModule,FormsModule],
  templateUrl: './billing-cycle.html',

  styleUrls: ['./billing-cycle.css']

})




export class Billing_BillingCycleComponent implements OnInit {

  cycles: BillingCycle[] = [];

  newCycle: BillingCycle = {

    billingCycleID: 0,

    serviceType: '',

    periodStart: '',

    periodEnd: '',

    billDate: '',

    status: ''

  };

  selectedCycle: BillingCycle | null = null;

  constructor(private service: BillingCycleService) {}

  ngOnInit() {

    this.loadData();

  }

  loadData() {

    this.service.getAll().subscribe(res => {

      this.cycles = res;

    });

  }

  addCycle() {

    this.service.create(this.newCycle).subscribe(() => {

      this.loadData();

      this.resetForm();

    });

  }

  editCycle(c: BillingCycle) {

    this.selectedCycle = { ...c };

  }

  updateCycle() {

    if (!this.selectedCycle) return;

    this.service.update(this.selectedCycle.billingCycleID, this.selectedCycle)

      .subscribe(() => {

        this.loadData();

        this.selectedCycle = null;

      });

  }

  resetForm() {

    this.newCycle = {

      billingCycleID: 0,

      serviceType: '',

      periodStart: '',

      periodEnd: '',

      billDate: '',

      status: ''

    };

  }

}
 