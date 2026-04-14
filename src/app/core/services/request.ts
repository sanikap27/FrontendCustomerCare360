import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { RequestDTO } from '../../feature/auth/models/CreateRequestDto';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environment/environment';



@Injectable({

  providedIn: 'root'

})

export class RequestService {

  private baseUrl = `${environment.apiUrl}/ServiceRequest`;

  constructor(private http: HttpClient) {}

  // ✅ CREATE REQUEST



createRequest(data: RequestDTO) {

  const token = localStorage.getItem('token');

  const headers = new HttpHeaders({

    Authorization: `Bearer ${token}`

  });

  return this.http.post(this.baseUrl, data, { headers });

}
 
 
getRequests(): Observable<any[]> {

  const token = localStorage.getItem('token');

  const headers = new HttpHeaders({

    Authorization: `Bearer ${token}`

  });

  return this.http.get<any[]>(this.baseUrl, { headers });

}
 
 
 

}
 