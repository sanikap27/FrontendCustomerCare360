import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';


@Injectable({

  providedIn: 'root'

})

export class CustomerReportService {

  private apiUrl = `${environment.apiUrl}/CustomerReport`;

  constructor(private http: HttpClient) {}

  private getHeaders() {

    const token = localStorage.getItem('token');

    return new HttpHeaders({

      Authorization: `Bearer ${token}`

    });

  }

  // GET all reports (Admin)

  getReports() {

    return this.http.get<any[]>(this.apiUrl, {

      headers: this.getHeaders()

    });

  }

  // CREATE (Admin only)

  createReport(data: any) {

    return this.http.post(this.apiUrl, data, {

      headers: this.getHeaders()

    });

  }

  // DELETE (Admin only)

  deleteReport(id: number) {

    return this.http.delete(`${this.apiUrl}/${id}`, {

      headers: this.getHeaders()

    });

  }

}
 