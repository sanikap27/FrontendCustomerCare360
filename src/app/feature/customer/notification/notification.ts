import { Component, OnInit, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common'; // Specific import for cleaner code
import { NotificationDTO } from '../../auth/models/notification-dto';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NgClass], // Using NgClass specifically instead of the whole CommonModule
  templateUrl: './notification.html',
  styleUrls: ['./notification.css']
})
export class NotificationsComponent implements OnInit {
  // Use modern inject function
  private readonly service = inject(NotificationService);

  // Reactive signals
  notifications = signal<NotificationDTO[]>([]);
  loading = signal<boolean>(false);

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications(): void {
    this.loading.set(true);

    this.service.getMyNotifications().subscribe({
      next: (res) => {
        console.log("Notifications fetched:", res);
        this.notifications.set(res);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Failed to load notifications', err);
        alert('Failed to load notifications');
        this.loading.set(false);
      }
    });
  }

  markAsRead(id: number): void {
    this.service.markAsRead(id).subscribe({
      next: () => {
        // Refresh the list after marking as read
        this.loadNotifications();
      },
      error: (err) => console.error('Error updating status:', err)
    });
  }
}