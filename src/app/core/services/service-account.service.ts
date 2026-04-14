import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class ServiceAccountService {

  private http = inject(HttpClient);

  private baseUrl = 'http://localhost:5000/api/ServiceAccount';

  getAll() {

    return this.http.get<any[]>(this.baseUrl);

  }

getByCustomer(customerId: number) {

  return this.http.get<any[]>(`${this.baseUrl}/ServiceAccount/customer/${customerId}`);

}
 
  create(data: any) {

    return this.http.post(this.baseUrl, data);

  }

  delete(id: number) {

    return this.http.delete(`${this.baseUrl}/${id}`);

  }

}
 