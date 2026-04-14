import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';


@Injectable({

  providedIn: 'root'

})

export class ComplaintService {

  private apiUrl = `${environment.apiUrl}/Complaint`;

  constructor(private http: HttpClient) {}

  private getHeaders() {

    const token = localStorage.getItem('token');

    return new HttpHeaders({

      Authorization: `Bearer ${token}`

    });

  }

  // GET ALL (Admin)

  getComplaints() {

    return this.http.get<any[]>(this.apiUrl, {

      headers: this.getHeaders()

    });

  }

  // UPDATE STATUS

  updateComplaint(id: number, data: any) {

    return this.http.put(`${this.apiUrl}/${id}`, data, {

      headers: this.getHeaders()

    });

  }

  // DELETE

  deleteComplaint(id: number) {

    return this.http.delete(`${this.apiUrl}/${id}`, {

      headers: this.getHeaders()

    });

  }

}
 