import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { environment } from '../../../../../environment/environment';

import { Observable } from 'rxjs';

import { ServiceRequest } from '../Models/service-request.model';

@Injectable({

  providedIn: 'root'

})

export class AgentServiceRequestService {

  private apiUrl = `${environment.apiUrl}/ServiceRequest`;

  constructor(private http: HttpClient) {}

  // ✅ MUST USE /all

  getRequests(): Observable<ServiceRequest[]> {

    return this.http.get<ServiceRequest[]>(`${this.apiUrl}/all`);

  }

  // ✅ UPDATE (Agent allowed)

  updateRequest(id: number, data: ServiceRequest) {

    return this.http.put(`${this.apiUrl}/${id}`, data);

  }

}
 