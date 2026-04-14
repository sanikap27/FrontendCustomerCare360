import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';



@Injectable({

  providedIn: 'root'

})

export class BillService {

  private apiUrl = `${environment.apiUrl}/Bill`;

  constructor(private http: HttpClient) {}

  private getHeaders() {

    const token = localStorage.getItem('token');

    return new HttpHeaders({

      Authorization: `Bearer ${token}`

    });

  }

  // ✅ Admin can only view

  getAllBills() {

    return this.http.get<any[]>(this.apiUrl, {

      headers: this.getHeaders()

    });

  }

}
 