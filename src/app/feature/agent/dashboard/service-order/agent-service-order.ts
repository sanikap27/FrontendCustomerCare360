import { Component, OnInit, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { AgentServiceOrderService } from '../Services/agent-service-order.service';

import { ServiceOrder } from '../Models/service-order.model';

@Component({

  selector: 'app-agent-service-order',

  standalone: true,

  imports: [CommonModule, FormsModule],

  templateUrl: './agent-service-order.html',

  styleUrls: ['./agent-service-order.css']

})

export class AgentServiceOrderComponent implements OnInit {

  orders = signal<ServiceOrder[]>([]);

  selectedOrder = signal<ServiceOrder | null>(null);

  constructor(private service: AgentServiceOrderService) {}

  ngOnInit() {

    this.getOrders();

  }

  getOrders() {

    this.service.getOrders().subscribe({

      next: (res) => this.orders.set(res),

      error: (err) => console.error(err)

    });

  }

  editOrder(order: ServiceOrder) {

    this.selectedOrder.set({ ...order });

  }

  updateOrder() {

    const order = this.selectedOrder();

    if (!order) return;

    this.service.updateOrder(order.serviceOrderId, order).subscribe({

      next: () => {

        alert('Updated successfully');

        this.selectedOrder.set(null);

        this.getOrders();

      },

      error: (err) => console.error(err)

    });

  }
  newOrder: ServiceOrder = {

  serviceOrderId: 0,

  serviceAccountId: 0,

  premiseId: 0,

  orderType: '',

  scheduledDate: '',

  completionDate: '',

  status: ''

};

addOrder() {

  this.service.addOrder(this.newOrder).subscribe({

    next: () => {

      alert('Order created successfully');

      this.getOrders();

      // reset form

      this.newOrder = {

        serviceOrderId: 0,

        serviceAccountId: 0,

        premiseId: 0,

        orderType: '',

        scheduledDate: '',

        completionDate: '',

        status: ''

      };

    },

    error: (err) => console.error(err)

  });

}
 

}
 