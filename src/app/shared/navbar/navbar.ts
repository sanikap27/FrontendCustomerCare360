import { Component } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../core/services/notification.service';

@Component({

  selector: 'app-navbar',

  standalone: true,

  imports: [CommonModule, RouterModule],

  templateUrl: './navbar.html',

  styleUrls: ['./navbar.css']

})

export class NavbarComponent {
  unreadCount=0;
  userId=0;
  user: any;
  notificationCount=0;

  showMenu = false;

  constructor(private router: Router,private notificationService: NotificationService) {

    this.user = JSON.parse(localStorage.getItem('user') || '{}');

  }

  toggleMenu() {

    this.showMenu = !this.showMenu;

  }

  goProfile() {

    this.router.navigate(['/customer-dashboard/profile']);

  }

 
  ngOnInit() {

  this.userId = Number(localStorage.getItem('userId')); // or from token

  this.loadNotificationCount();

}
 loadNotificationCount() {

  this.notificationService.getMyNotifications().subscribe(res => {

    this.unreadCount = res.filter(n => n.status === 'Unread').length;

   

  });
  

}
goToNotifications() {

  this.router.navigate(['/customer-dashboard/notifications']);  
 

}

}
 