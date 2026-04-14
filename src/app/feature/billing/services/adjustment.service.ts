import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';

export interface Adjustment {

  adjustmentId: number;

  billId: number;

  reason: string;

  amountDelta: number;

  approvedBy: string;

  status: string;

}

@Injectable({

  providedIn: 'root'

})

export class AdjustmentService {

   private apiUrl = `${environment.apiUrl}/Adjustment`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Adjustment[]> {

    return this.http.get<Adjustment[]>(this.apiUrl);

  }

}
 