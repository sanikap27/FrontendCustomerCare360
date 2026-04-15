import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { AgentAdjustmentService } from '../Services/agent-adjustment.service';

import { Adjustment } from '../Models/adjustment.model';

@Component({

  selector: 'app-agent-adjustment',

  standalone: true,

  imports: [CommonModule, FormsModule],

  templateUrl: './agent-adjustment.html',

  styleUrls: ['./agent-adjustment.css']

})

export class AgentAdjustmentComponent implements OnInit {

  adjustments: Adjustment[] = [];

  newAdjustment: Adjustment = {

    adjustmentId: 0,

    billId: 0,

    reason: '',

    amountDelta: 0,
    approvedBy:'',

    status: 'Pending'

  };

  constructor(private service: AgentAdjustmentService) {}

  ngOnInit() {

    this.loadAdjustments();

  }

  loadAdjustments() {

    this.service.getAdjustments().subscribe({

      next: (res) => this.adjustments = res,

      error: (err) => console.error(err)

    });

  }

  addAdjustment() {

    
    this.service.addAdjustment(this.newAdjustment).subscribe({

      next: () => {

        alert('Added successfully');

        this.loadAdjustments();

      }

    });

  }

  approve(id: number) {

    this.service.approveAdjustment(id, 1).subscribe({

      next: () => {

        alert('Approved');

        this.loadAdjustments();

      }

    });

  }

  delete(id: number) {

    this.service.deleteAdjustment(id).subscribe({

      next: () => {

        alert('Deleted');

        this.loadAdjustments();

      }

    });

  }

}
 