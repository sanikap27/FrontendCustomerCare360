import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';

@Injectable({

  providedIn: 'root'

})

export class ServiceRequestService {

  private apiUrl = `${environment.apiUrl}/ServiceRequest`;

  constructor(private http: HttpClient) {}

  private getHeaders() {

    const token = localStorage.getItem('token');

    return new HttpHeaders({

      Authorization: `Bearer ${token}`

    });

  }

// service-request.service.ts

getMyRequests() {

  return this.http.get(`${this.apiUrl}`, { headers: this.getHeaders() });

}

getAllRequests() {

  return this.http.get(`${this.apiUrl}/all`, { headers: this.getHeaders() });

}

createRequest(data: any) {

  return this.http.post(`${this.apiUrl}`, data, { headers: this.getHeaders() });

}

updateRequest(id: number, data: any) {

  return this.http.put(`${this.apiUrl}/${id}`, data, { headers: this.getHeaders() });

}

deleteRequest(id: number) {

  return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });

}
 

}
 