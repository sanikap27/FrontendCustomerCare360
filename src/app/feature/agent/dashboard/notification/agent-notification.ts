import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { AgentNotificationService } from '../Services/agent-notification.service';
import { Notification } from '../Models/notification.model';
import { AgentNotificationService } from '../Services/agent-notification.service';
@Component({
 selector: 'app-agent-notification',
 standalone: true,
 imports: [CommonModule, FormsModule],
 templateUrl: './agent-notification.html',
 styleUrls: ['./agent-notification.css']
})
export class AgentNotificationComponent {
 notification: Notification = {
   notificationId: 0,
   userId: 0,
   message: '',
   category: ''
 };
 constructor(private service: AgentNotificationService) {}
 sendNotification() {
   this.service.createNotification(this.notification).subscribe({
     next: () => {
       alert('Notification sent successfully');
       this.resetForm();
     },
     error: (err) => console.error(err)
   });
 }
 resetForm() {
   this.notification = {
     notificationId: 0,
     userId: 0,
     message: '',
     category: ''
   };
 }
}