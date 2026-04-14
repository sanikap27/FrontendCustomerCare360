import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { ComplaintService } from '../../../core/services/complaint';

@Component({

  selector: 'app-complaints',

  standalone: true,

  imports: [CommonModule, FormsModule],

  templateUrl: './complaints.html',

  styleUrls: ['./complaints.css']

})

export class ComplaintsComponent implements OnInit {

  category = '';

  description = '';

  complaints: any[] = [];   // ✅ for table

  constructor(private service: ComplaintService) {}

  // ✅ LOAD complaints when page opens

  ngOnInit() {

    this.getComplaints();

  }

  // ✅ GET complaints from backend

  getComplaints() {

    this.service.getMyComplaints().subscribe({

      next: (res: any) => {

        console.log("Complaints:", res);

        this.complaints = res;

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

  // ✅ SUBMIT complaint

  submitComplaint() {

    if (!this.category || !this.description) {

      alert('Please fill all fields');

      return;

    }

    const data = {

      category: this.category,

      description: this.description

    };

    this.service.createComplaint(data).subscribe({

      next: () => {

        alert('Complaint submitted successfully ✅');

        // reset form

        this.category = '';

        this.description = '';

        // 🔥 IMPORTANT: refresh table after submit

        this.getComplaints();

      },

      error: (err) => {

        console.log(err);

        alert('Failed to submit complaint ❌');

      }

    });

  }

}
 