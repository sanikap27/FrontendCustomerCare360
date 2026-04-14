import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { environment } from '../../../../../environment/environment';

import { Observable } from 'rxjs';
import { Customer } from '../../../../admin/models/customer.model';


@Injectable({

  providedIn: 'root'

})

export class AgentCustomerService {

  private apiUrl = `${environment.apiUrl}/Customer`;

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {

    return this.http.get<Customer[]>(this.apiUrl);

  }

  addCustomer(data: Customer) {

    return this.http.post(this.apiUrl, data);

  }

  updateCustomer(id: number, data: Customer) {

    return this.http.put(`${this.apiUrl}/${id}`, data);

  }

}
 