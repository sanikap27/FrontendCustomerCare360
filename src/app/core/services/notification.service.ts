import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { NotificationDTO } from '../../feature/auth/models/notification-dto';
import { environment } from '../../../environment/environment';
@Injectable({

  providedIn: 'root'

})

export class NotificationService {

  private api = `${environment.apiUrl}/Notification`;

  constructor(private http: HttpClient) {}

 getMyNotifications(): Observable<NotificationDTO[]> {

  const token = localStorage.getItem('token');

  return this.http.get<NotificationDTO[]>(`${this.api}/my`, {

    headers: {

      Authorization: `Bearer ${token}`

    }

  });

}
 

 markAsRead(id: number): Observable<any> {

  const token = localStorage.getItem('token');

  return this.http.put(

    `${this.api}/status/${id}?status=Read`,

    {},

    {

      headers: {

        Authorization: `Bearer ${token}`

      }

    }

  );

}
 

}
 