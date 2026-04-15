import { Component, OnInit } from '@angular/core';
import { Bill, BillService } from '../services/bill.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-billing-bills',
  imports: [CommonModule,FormsModule],
  templateUrl: './billing-bills.html',
  styleUrl: './billing-bills.css',
})



export class BillingBillsComponent implements OnInit {
 bills: Bill[] = [];
 newBill: Bill = {
   billId: 0,
   serviceAccountId: 0,
   billingCycleId: 0,
   usage: 0,
   amount: 0,
   dueDate: '',
   status: ''
 };
 selectedBill: Bill | null = null;
 constructor(private service: BillService) {}
 ngOnInit() {
   this.loadData();
 }
 loadData() {
   this.service.getAll().subscribe(res => {
     this.bills = res;
   });
 }
 addBill() {
   this.service.create(this.newBill).subscribe(() => {
    alert("Bill Added Successfully!!!")
        this.loadData();
     this.resetForm();
   });
 }
 editBill(b: Bill) {
   this.selectedBill = { ...b };
  
 }
 updateBill() {
   if (!this.selectedBill) return;
   this.service.update(this.selectedBill.billId, this.selectedBill)
     .subscribe(() => {
      alert("Bill Updated!!!")
       this.loadData();
       this.selectedBill = null;
     });
 }
 deleteBill(id: number) {
   this.service.delete(id).subscribe(() => {
    alert("Bill Deleted Successfully")
     this.loadData();
   });
 }
 resetForm() {
   this.newBill = {
     billId: 0,
     serviceAccountId: 0,
     billingCycleId: 0,
     usage: 0,
     amount: 0,
     dueDate: '',
     status: ''
   };
 }
}