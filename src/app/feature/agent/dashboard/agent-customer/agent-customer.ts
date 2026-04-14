import { Component, OnInit } from '@angular/core';
import { CustomerDTO } from '../Models/customer.model';
import { AgentCustomerService } from '../Services/agent-customer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../../../admin/models/customer.model';


@Component({
  selector: 'app-agent-customer',
  imports: [CommonModule,FormsModule],
  templateUrl: './agent-customer.html',
  styleUrl: './agent-customer.css',
})

export class AgentCustomerComponent implements OnInit {
 customers: Customer[] = [];
 customer: Customer = {
   customerId: 0,
   userId: 0,
   customerType: '',
   contactInfo: '',
   status: ''
 };
 isEdit = false;
 constructor(private service: AgentCustomerService) {}
 ngOnInit() {
   this.getCustomers();
 }
 // ✅ GET ALL
 getCustomers() {
   this.service.getCustomers().subscribe({
     next: (res) => {
       this.customers = res;
     },
     error: (err) => console.error(err)
   });
 }
 // ✅ ADD / UPDATE
 addCustomer() {
   if (this.isEdit) {
     this.service.updateCustomer(this.customer.customerId, this.customer).subscribe({
       next: () => {
         alert('Updated successfully');
         this.resetForm();
         this.getCustomers();
       },
       error: (err) => console.error(err)
     });
   } else {
     this.service.addCustomer(this.customer).subscribe({
       next: () => {
         alert('Added successfully');
         this.resetForm();
         this.getCustomers();
       },
       error: (err) => console.error(err)
     });
   }
 }
 // ✅ EDIT
 editCustomer(c: Customer) {
   this.customer = { ...c };
   this.isEdit = true;
 }
 // ✅ RESET
 resetForm() {
   this.customer = {
     customerId: 0,
     userId: 0,
     customerType: '',
     contactInfo: '',
     status: ''
   };
   this.isEdit = false;
 }
}