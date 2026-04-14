import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environment/environment';
import { Notification } from '../Models/notification.model';
@Injectable({
 providedIn: 'root'
})
export class AgentNotificationService {
 private apiUrl = `${environment.apiUrl}/Notification`;
 constructor(private http: HttpClient) {}
 // ✅ CREATE ONLY
 createNotification(data: Notification) {
   return this.http.post(this.apiUrl, data);
 }
}