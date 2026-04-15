import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from '../../../../../environment/environment';
import { Observable } from 'rxjs';

import { ServiceOrder } from '../Models/service-order.model';

// @Injectable({

//   providedIn: 'root'

// })

// export class AgentServiceOrderService {

//   private apiUrl = `${environment.apiUrl}/ServiceOrder`;

//   constructor(private http: HttpClient) {}

//   // ✅ GET all (Agent)

//   getOrders(): Observable<ServiceOrder[]> {

//     return this.http.get<ServiceOrder[]>(this.apiUrl);

//   }

//   // ✅ ADD

//   addOrder(data: ServiceOrder) {

//     return this.http.post(this.apiUrl, data);

//   }

//   // ✅ UPDATE

//   updateOrder(id: number, data: ServiceOrder) {

//     return this.http.put(`${this.apiUrl}/${id}`, data);

//   }
// }

@Injectable({

  providedIn: 'root'

})

export class AgentServiceOrderService {

  private apiUrl = `${environment.apiUrl}/ServiceOrder`;

  constructor(private http: HttpClient) {}

  getOrders(): Observable<ServiceOrder[]> {

    return this.http.get<ServiceOrder[]>(this.apiUrl);

  }

  addOrder(data: ServiceOrder) {

    return this.http.post(this.apiUrl, data);

  }

  updateOrder(id: number, data: ServiceOrder) {

    return this.http.put(`${this.apiUrl}/${id}`, data);

  }

}
 