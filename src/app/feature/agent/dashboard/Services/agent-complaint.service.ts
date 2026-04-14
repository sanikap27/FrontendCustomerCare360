import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { environment } from '../../../../../environment/environment';

import { Observable } from 'rxjs';

import { Complaint } from '../Models/complaint.model';

@Injectable({

  providedIn: 'root'

})

export class AgentComplaintService {

  private apiUrl = `${environment.apiUrl}/Complaint`;

  constructor(private http: HttpClient) {}

  // ✅ GET ALL

  getComplaints(): Observable<Complaint[]> {

    return this.http.get<Complaint[]>(this.apiUrl);

  }

  // ✅ UPDATE STATUS

  updateComplaint(id: number, data: Complaint) {

    return this.http.put(`${this.apiUrl}/${id}`, data);

  }

}
 