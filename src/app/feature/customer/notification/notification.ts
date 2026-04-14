import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { NotificationDTO } from '../../auth/models/notification-dto';

import { NotificationService } from '../../../core/services/notification.service';

@Component({

  selector: 'app-notifications',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './notification.html',

  styleUrls: ['./notification.css']

})

export class NotificationsComponent implements OnInit {

  notifications: NotificationDTO[] = [];

  loading = false;


  constructor(private service: NotificationService) {}

  ngOnInit(): void {

    this.loadNotifications();

  }

  loadNotifications() {

    this.loading = true;

    this.service.getMyNotifications().subscribe({

      next: (res) => {
        console.log("Notifications:", res);

        this.notifications = res;

        this.loading = false;

      },

      error: () => {
        console.log('Failed to load notifications');

        alert('Failed to load notifications');

        this.loading = false;

      }

    });

  }

  markAsRead(id: number) {

    this.service.markAsRead(id).subscribe(() => {

      this.loadNotifications();

    });

  }

}
 