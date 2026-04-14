import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';


import { environment } from '../../../environment/environment';

@Injectable({

  providedIn: 'root'

})

export class BillingCycleService {

  private apiUrl = `${environment.apiUrl}/BillingCycle`;

  constructor(private http: HttpClient) {}

  private getHeaders() {

    const token = localStorage.getItem('token');

    return new HttpHeaders({

      Authorization: `Bearer ${token}`

    });

  }

  // ✅ GET ALL (Admin allowed)

  getAll() {

    return this.http.get<any[]>(this.apiUrl, {

      headers: this.getHeaders()

    });

  }

  // ❌ No create (Admin not allowed)

  // ❌ No update (Admin not allowed)

  // ✅ DELETE (Admin allowed)

  delete(id: number) {

    return this.http.delete(`${this.apiUrl}/${id}`, {

      headers: this.getHeaders()

    });

  }

}
 