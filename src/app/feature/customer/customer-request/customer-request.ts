import { Component, OnInit } from '@angular/core';

import { RequestService } from '../../../core/services/request';

import { RequestDTO } from '../../auth/models/CreateRequestDto';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({

  selector: 'app-customer-request',

  standalone: true,

  imports: [FormsModule,CommonModule],

  templateUrl: './customer-request.html',
  styleUrl: './customer-request.css'

})

export class CustomerRequestComponent implements OnInit {

  requestForm: RequestDTO = {

    requestType: '',

    priority: ''

  };

  requests: any[] = [];

  loading = false;

  constructor(private service: RequestService) {}

  ngOnInit(): void {

    this.loadRequests();

  }

  // ✅ LOAD REQUESTS

  loadRequests() {

  this.loading = true;

  this.service.getRequests().subscribe({

    next: (data) => {

      console.log("API DATA:", data); // ✅ CHECK THIS

      this.requests = data;

      this.loading = false;

    },

    error: (err) => {

      console.error(err);

      alert('Failed to load requests');

      this.loading = false;

    }

  });

}
 

  // ✅ SUBMIT REQUEST

 submitRequest() {

  if (!this.requestForm.requestType || !this.requestForm.priority) {

    alert("Fill all fields properly ❗");

    return;

  }

  this.loading = true;

  const payload = {

    requestType: this.requestForm.requestType,

    priority: this.requestForm.priority,

    status: 'Pending'   // ✅ ADD THIS

  };

  this.service.createRequest(payload).subscribe({

    next: (res) => {

      alert('Request Created Successfully ✅');

      this.loading = false;

      this.requestForm = {

        requestType: '',

        priority: ''

      };

      this.loadRequests();

    },

    error: (err) => {

      console.log("FULL ERROR:", err);

      console.log("BACKEND MESSAGE:", err.error);

      alert('Write Service Request ❌');

      this.loading = false;

    }

  });

}
 


}
 