import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';

export interface BillingCycle {

  billingCycleID: number;

  serviceType: string;

  periodStart: string;

  periodEnd: string;

  billDate: string;

  status: string;

}

@Injectable({

  providedIn: 'root'

})

export class BillingCycleService {

  private apiUrl = `${environment.apiUrl}/BillingCycle`;// change if needed

  constructor(private http: HttpClient) {}

  getAll(): Observable<BillingCycle[]> {

    return this.http.get<BillingCycle[]>(this.apiUrl);

  }

  create(data: BillingCycle) {

    return this.http.post(this.apiUrl, data);

  }

  update(id: number, data: BillingCycle) {

    return this.http.put(`${this.apiUrl}/${id}`, data);

  }

}
 