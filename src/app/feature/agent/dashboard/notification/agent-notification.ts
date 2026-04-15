import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { RouterModule, Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs';
import { AgentNotificationService } from '../Services/agent-notification.service';



@Component({

  selector: 'app-agent-notification',

  standalone: true,

  imports: [CommonModule, FormsModule, RouterModule],

  templateUrl: './agent-notification.html',

  styleUrls: ['./agent-notification.css']

})

export class AgentNotificationComponent implements OnInit {

  notifications: any[] = [];

  newNotification = {

    userId: '',

    message: '',

    category: 'Billing'

  };

  constructor(

    private service: AgentNotificationService,

    private router: Router

  ) {}

  ngOnInit() {

    this.loadNotifications();

    // auto refresh when route changes

    this.router.events

      .pipe(filter(e => e instanceof NavigationEnd))

      .subscribe(() => {

        this.loadNotifications();

      });

  }

  loadNotifications() {

    this.service.getAllNotifications().subscribe(res => {

      console.log("Notifications:", res);

      this.notifications = res;

    });

  }

  sendNotification() {

    this.service.createNotification(this.newNotification).subscribe(() => {

      alert("Notification sent ✅");

      this.loadNotifications();

    });

  }

  deleteNotification(id: number) {

    this.service.deleteNotification(id).subscribe(() => {

      this.loadNotifications();

    });

  }

}
 