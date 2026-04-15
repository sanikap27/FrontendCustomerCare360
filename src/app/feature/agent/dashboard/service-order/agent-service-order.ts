
 

import { Component, OnInit } from '@angular/core';

import { AgentServiceOrderService } from '../Services/agent-service-order.service';

import { ServiceOrder } from '../Models/service-order.model';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

@Component({

  selector: 'app-agent-service-order',

  standalone: true,

  imports: [CommonModule, FormsModule],

  templateUrl: './agent-service-order.html',

  styleUrls: ['./agent-service-order.css']

})

export class AgentServiceOrderComponent implements OnInit {

  orders: ServiceOrder[] = [];

  newOrder: ServiceOrder = {

    serviceOrderId: 0,

    serviceAccountId: 0,

    premiseId: 0,

    orderType: '',

    scheduledDate: new Date(),

    completionDate: null,

    status: 'Pending'

  };

  selectedOrder: ServiceOrder | null = null;

  constructor(private service: AgentServiceOrderService) {}

  ngOnInit() {

    this.loadOrders();

  }

  // ✅ LOAD DATA

  loadOrders() {

    this.service.getOrders().subscribe({

      next: (res) => {

        this.orders = res;

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

  // ✅ ADD ORDER

  addOrder() {

    this.newOrder.scheduledDate = new Date(this.newOrder.scheduledDate);

    this.service.addOrder(this.newOrder).subscribe({

      next: () => {

        alert("Order Added Successfully ✅");

        this.loadOrders();

        this.resetForm();

      },

      error: (err) => {

        console.error(err);

        alert("Failed to add order ❌");

      }

    });

  }

  // ✅ EDIT

  editOrder(o: ServiceOrder) {

  this.selectedOrder = { ...o };

  // ✅ FIX HERE

  if (this.selectedOrder.scheduledDate) {

    this.selectedOrder.scheduledDate =

      new Date(this.selectedOrder.scheduledDate).toISOString().split('T')[0];

  }

}
 

  // ✅ UPDATE

  updateOrder() {

    if (!this.selectedOrder) return;

    this.selectedOrder.scheduledDate = new Date(this.selectedOrder.scheduledDate);

    this.service.updateOrder(this.selectedOrder.serviceOrderId, this.selectedOrder)

      .subscribe({

        next: () => {

          alert("Order Updated ✅");

          this.loadOrders();

          this.selectedOrder = null;

        },

        error: (err) => {

          console.error(err);

          alert("Update failed ❌");

        }

      });

  }

  // ✅ RESET

  resetForm() {

    this.newOrder = {

      serviceOrderId: 0,

      serviceAccountId: 0,

      premiseId: 0,

      orderType: '',

      scheduledDate: new Date(),

      completionDate: null,

      status: 'Pending'

    };

  }

}
 