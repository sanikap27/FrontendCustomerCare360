import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { environment } from '../../../environment/environment';

@Injectable({

  providedIn: 'root'

})

export class NotificationService {

  private apiUrl = `${environment.apiUrl}/Notification`;

  constructor(private http: HttpClient) {}

  private getHeaders() {

    const token = localStorage.getItem('token');

    return new HttpHeaders({

      Authorization: `Bearer ${token}`

    });

  }

  getAllNotifications() {

    return this.http.get(`${this.apiUrl}`, {

      headers: this.getHeaders()

    });

  }

  createNotification(data: any) {

    return this.http.post(`${this.apiUrl}`, data, {

      headers: this.getHeaders()

    });

  }

  deleteNotification(id: number) {

    return this.http.delete(`${this.apiUrl}/${id}`, {

      headers: this.getHeaders()

    });

  }

}
 