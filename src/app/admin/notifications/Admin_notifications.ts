import { Component, OnInit, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-admin-notifications',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './Admin_notifications.html',
  styleUrl: './Admin_notifications.css',
})
export class Admin_NotificationsComponent implements OnInit {
  // Use modern inject function
  private readonly service = inject(NotificationService);
  private readonly router = inject(Router);

  // Signal-based state management
  notifications = signal<any[]>([]);
  successMsg = signal<string>('');
  
  // Signal for the form object
  newNotification = signal({
    userId: '',
    message: '',
    category: ''
  });

  ngOnInit(): void {
    this.loadNotifications();

    // Re-load notifications on navigation ends
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.loadNotifications());
  }

  loadNotifications(): void {
    this.service.getAllNotifications().subscribe({
      next: (res: any) => this.notifications.set(res),
      error: (err) => console.error('Failed to load notifications', err)
    });
  }

  updateFormField(field: string, value: any): void {
    this.newNotification.update(prev => ({ ...prev, [field]: value }));
  }

  createNotification(): void {
    const payload = this.newNotification();
    
    this.service.createNotification(payload).subscribe({
      next: () => {
        this.successMsg.set("Notification created successfully ✅");
        this.loadNotifications();
        
        // Reset form signal
        this.newNotification.set({
          userId: '',
          message: '',
          category: ''
        });

        this.clearMessage();
      },
      error: (err) => console.error('Creation failed', err)
    });
  }

  deleteNotification(id: number): void {
    if (!confirm('Are you sure you want to delete this notification?')) return;

    this.service.deleteNotification(id).subscribe({
      next: () => {
        this.successMsg.set("Notification deleted successfully ❌");
        // Efficiently update UI without a full reload
        this.notifications.update(prev => prev.filter(n => n.notificationId !== id));
        this.clearMessage();
      },
      error: (err) => console.error('Delete failed', err)
    });
  }

  private clearMessage(): void {
    setTimeout(() => this.successMsg.set(''), 3000);
  }
}