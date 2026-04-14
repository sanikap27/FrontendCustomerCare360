import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { ServiceAccount } from '../models/service-account.model';
import { environment } from '../../../environment/environment';


@Injectable({

  providedIn: 'root'

})

export class ServiceAccountService {

  private apiUrl = `${environment.apiUrl}/ServiceAccount`;

  constructor(private http: HttpClient) {}

  getAll() {

    return this.http.get<ServiceAccount[]>(this.apiUrl);

  }

  getById(id: number) {

    return this.http.get<ServiceAccount>(`${this.apiUrl}/${id}`);

  }

  create(data: ServiceAccount) {

    return this.http.post(this.apiUrl, data);

  }

  update(id: number, data: ServiceAccount) {

    return this.http.put(`${this.apiUrl}/${id}`, data);

  }

  delete(id: number) {

    return this.http.delete(`${this.apiUrl}/${id}`);

  }

}
 