import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { AgentComplaintService } from '../Services/agent-complaint.service';

import { Complaint } from '../Models/complaint.model';

@Component({

  selector: 'app-agent-complaint',

  standalone: true,

  imports: [CommonModule, FormsModule],

  templateUrl: './agent-complaint.html',

  styleUrls: ['./agent-complaint.css']

})

export class AgentComplaintComponent implements OnInit {

  complaints: Complaint[] = [];

  selectedComplaint: Complaint | null = null;

  constructor(private service: AgentComplaintService) {}

  ngOnInit() {

    this.loadComplaints();

  }

  loadComplaints() {

    this.service.getComplaints().subscribe({

      next: (res) => this.complaints = res,

      error: (err) => console.error(err)

    });

  }

  editComplaint(c: Complaint) {

    this.selectedComplaint = { ...c };

  }

  updateComplaint() {

    if (!this.selectedComplaint) return;

    this.service.updateComplaint(

      this.selectedComplaint.complaintId,

      this.selectedComplaint

    ).subscribe({

      next: () => {

        alert('Updated successfully');

        this.selectedComplaint = null;

        this.loadComplaints();

      }

    });

  }

}
 