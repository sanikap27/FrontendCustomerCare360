import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.services';

import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../models/customer.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers',
  imports: [FormsModule,CommonModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class CustomersComponent implements OnInit {
 customers: Customer[] = [];
 form: Customer = {
   customerId: 0,
   userId: 0 ,
   customerType: '',
   contactInfo: '',
   status: ''
 };
 isEdit = false;
 constructor(private service: CustomerService) {}
 ngOnInit() {
   this.loadCustomers();
 }
 loadCustomers() {
   this.service.getCustomers().subscribe(res => {
     this.customers = res;
   });
 }
 saveCustomer() {
   if (this.isEdit) {
     this.service.updateCustomer(this.form.customerId, this.form)
       .subscribe(() => {
         this.loadCustomers();
         this.resetForm();
       });
   } else {
     this.service.addCustomer(this.form)
       .subscribe(() => {
         this.loadCustomers();
         this.resetForm();
       });
   }
 }
 editCustomer(c: Customer) {
   this.form = { ...c };
   this.isEdit = true;
 }
 deleteCustomer(id: number) {
   this.service.deleteCustomer(id).subscribe(() => {
    alert('Customer deleted successfully!');
     this.loadCustomers();
   });
 }
 resetForm() {
   this.form = {
     customerId: 0,
     userId: 0,
     customerType: '',
     contactInfo: '',
     status: ''
   };
   this.isEdit = false;
 }
}