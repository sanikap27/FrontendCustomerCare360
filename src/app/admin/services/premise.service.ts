import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({

  providedIn: 'root'

})

export class PremiseService {

  private apiUrl = 'http://localhost:5000/api/Premise';

  constructor(private http: HttpClient) {}

  private getHeaders() {

    const token = localStorage.getItem('token');

    return new HttpHeaders({

      Authorization: `Bearer ${token}`

    });

  }

  getPremises() {

    return this.http.get<any[]>(this.apiUrl, { headers: this.getHeaders() });

  }

  addPremise(data: any) {

    return this.http.post(this.apiUrl, data, { headers: this.getHeaders() });

  }

  deletePremise(id: number) {

    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });

  }

}
 