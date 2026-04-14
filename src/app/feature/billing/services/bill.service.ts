import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';

export interface Bill {

  billId: number;

  serviceAccountId: number;

  billingCycleId: number;

  usage: number;

  amount: number;

  dueDate: string;

  status: string;

}

@Injectable({

  providedIn: 'root'

})

export class BillService {

 private apiUrl = `${environment.apiUrl}/Bill`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Bill[]> {

    return this.http.get<Bill[]>(this.apiUrl);

  }

  create(data: Bill) {

    return this.http.post(this.apiUrl, data);

  }

  update(id: number, data: Bill) {

    return this.http.put(`${this.apiUrl}/${id}`, data);

  }

  delete(id: number) {

    return this.http.delete(`${this.apiUrl}/${id}`);

  }

}
 