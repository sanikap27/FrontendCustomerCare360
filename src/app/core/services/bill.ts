import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BillDTO } from '../../feature/auth/models/BillDTO';
import { environment } from '../../../environment/environment';

@Injectable({

  providedIn: 'root'

})

export class Bill {

  private baseUrl = `${environment.apiUrl}/Bill`;

  constructor(private http: HttpClient) {}

  // ✅ Get bills for logged customer

  getCustomerBills(): Observable<BillDTO[]> {

    const token = localStorage.getItem('token');

    return this.http.get<BillDTO[]>(

      `${this.baseUrl}/customer`);

  }

}
 