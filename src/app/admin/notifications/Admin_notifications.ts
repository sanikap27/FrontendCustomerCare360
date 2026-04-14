import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notifications',
  imports: [CommonModule,FormsModule],
  templateUrl: './Admin_notifications.html',
  styleUrl: './Admin_notifications.css',
})

export class Admin_NotificationsComponent implements OnInit {
 notifications: any[] = [];
 newNotification = {
   userId: '0',
   message: '',
   category: 'bill'
 };
 successMsg = '';
 constructor(private service: NotificationService, private router: Router) {}
 ngOnInit() {
   this.loadNotifications();
   // ✅ Fix standalone issue
   this.router.events
     .pipe(filter(e => e instanceof NavigationEnd))
     .subscribe(() => {
       this.loadNotifications();
     });
 }
 loadNotifications() {
   this.service.getAllNotifications().subscribe((res: any) => {
     this.notifications = res;
   });
 }
 createNotification() {
   this.service.createNotification(this.newNotification).subscribe(() => {
     this.successMsg = "Notification created successfully ✅";
     this.loadNotifications();
     this.newNotification = {
       userId: '',
       message: '',
       category: 'General'
     };
   });
 }
 deleteNotification(id: number) {
   this.service.deleteNotification(id).subscribe(() => {
     this.successMsg = "Notification deleted successfully ❌";
     this.notifications = this.notifications.filter(n => n.notificationId !== id);
   });
 }
}