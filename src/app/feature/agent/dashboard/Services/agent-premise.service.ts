import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { environment } from '../../../../../environment/environment';

import { Observable } from 'rxjs';

import { Premise } from '../Models/premise.model';

@Injectable({

  providedIn: 'root'

})

export class AgentPremiseService {

  private apiUrl = `${environment.apiUrl}/Premise`;

  constructor(private http: HttpClient) {}

  // ✅ GET ALL PREMISES

  getPremises(): Observable<Premise[]> {

    return this.http.get<Premise[]>(this.apiUrl);

  }

  // ✅ GET BY ID (optional)

  getPremiseById(id: number): Observable<Premise> {

    return this.http.get<Premise>(`${this.apiUrl}/${id}`);

  }

}
 