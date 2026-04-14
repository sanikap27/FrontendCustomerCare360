import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';

@Injectable({

  providedIn: 'root'

})

export class ProfileService {

  private baseUrl = environment.apiUrl + '/User';

  constructor(private http: HttpClient) {}

  // ✅ UPDATE USER API

  updateUser(data: any) {

    const token = localStorage.getItem('token');

    return this.http.put(

      `${this.baseUrl}/update`,

      data,

      {

        headers: {

          Authorization: `Bearer ${token}`

        }

      }

    );

  }

}
 