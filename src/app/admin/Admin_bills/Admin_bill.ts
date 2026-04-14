import { Component, OnInit } from '@angular/core';
import { BillService } from '../services/bill.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bill',
  imports: [CommonModule,FormsModule],
  templateUrl: './Admin_bill.html',
  styleUrl: './Admin_bill.css',
})

export class Admin_BillsComponent implements OnInit {
 bills: any[] = [];
 constructor(private service: BillService) {}
 ngOnInit() {
   this.loadBills();
 }
 loadBills() {
   this.service.getAllBills().subscribe(res => {
     this.bills = res;
   });
 }
}