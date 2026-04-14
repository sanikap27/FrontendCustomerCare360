import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({

  providedIn: 'root'

})

export class ComplaintService {

  private api = `${environment.apiUrl}/Complaint`;

  constructor(private http: HttpClient) {}

createComplaint(data: any) {

  const token = localStorage.getItem('token');

  return this.http.post(this.api, {

    category: data.category,

    description: data.description

  });

}

getMyComplaints() {

  const token = localStorage.getItem('token');

  return this.http.get(`${this.api}/my`, {

    headers: {

      Authorization: `Bearer ${token}`

    }

  });

}
 
 
}
 


 