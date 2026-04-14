import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';



import { environment } from '../../../environment/environment';
import { Customer } from '../models/customer.model';

@Injectable({

  providedIn: 'root'

})

export class CustomerService {

  private baseUrl = `${environment.apiUrl}/Customer`;

  constructor(private http: HttpClient) {}

  // GET ALL

  getCustomers() {

    return this.http.get<Customer[]>(this.baseUrl);

  }

  // GET BY ID

  getCustomer(id: number) {

    return this.http.get<Customer>(`${this.baseUrl}/${id}`);

  }

  // ADD

  addCustomer(data: Customer) {

    return this.http.post<Customer>(this.baseUrl, data);

  }

  // UPDATE

  updateCustomer(id: number, data: Customer) {

    return this.http.put(`${this.baseUrl}/${id}`, data);

  }

  // DELETE

  deleteCustomer(id: number) {

    return this.http.delete(`${this.baseUrl}/${id}`);

  }

}
 