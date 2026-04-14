import { Component, OnInit } from '@angular/core';
import { Adjustment, AdjustmentService } from '../services/adjustment.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-billing-adjustment',
  imports: [FormsModule,CommonModule],
  templateUrl: './billing-adjustment.html',
  styleUrl: './billing-adjustment.css',
})



export class BillingAdjustmentComponent implements OnInit {
 adjustments: Adjustment[] = [];
 constructor(private service: AdjustmentService) {}
 ngOnInit(): void {
   this.loadAdjustments();
 }
 loadAdjustments() {
   this.service.getAll().subscribe(res => {
     this.adjustments = res;
   });
 }
}
