import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { environment } from '../../../../../environment/environment';

import { Observable } from 'rxjs';

import { Adjustment } from '../Models/adjustment.model';

@Injectable({

  providedIn: 'root'

})

export class AgentAdjustmentService {

  private apiUrl = `${environment.apiUrl}/Adjustment`;

  constructor(private http: HttpClient) {}

  // ✅ GET ALL

  getAdjustments(): Observable<Adjustment[]> {

    return this.http.get<Adjustment[]>(this.apiUrl);

  }

  // ✅ CREATE

  addAdjustment(data: Adjustment) {

    return this.http.post(this.apiUrl, data);

  }

  // ✅ APPROVE

  approveAdjustment(id: number, adminId: number) {

    return this.http.put(`${this.apiUrl}/${id}?adminId=${adminId}`, {});

  }

  // ✅ DELETE

  deleteAdjustment(id: number) {

    return this.http.delete(`${this.apiUrl}/${id}`);

  }

}
 