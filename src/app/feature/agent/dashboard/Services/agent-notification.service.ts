import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from '../../../../../environment/environment';

@Injectable({ providedIn: 'root' })

export class AgentNotificationService {

  constructor(private http: HttpClient) {}

  getAllNotifications() {

    return this.http.get<any[]>(`${environment.apiUrl}/Notification`);

  }

  createNotification(data: any) {

    return this.http.post(`${environment.apiUrl}/Notification`, data);

  }

  deleteNotification(id: number) {

    return this.http.delete(`${environment.apiUrl}/Notification/${id}`);

  }

}
 