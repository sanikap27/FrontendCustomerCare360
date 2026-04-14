import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { ProfileService } from '../../../core/services/profile';

@Component({

  selector: 'app-profile',

  standalone: true,

  imports: [CommonModule, FormsModule],

  templateUrl: './profile.html',
  styleUrls: ['./profile.css']

})

export class ProfileComponent {
  constructor(private ProfileService: ProfileService) {}

  user: any = {};

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('user') || '{}');

  }

update() {

  this.ProfileService.updateUser(this.user).subscribe({

    next: () => {

      alert('Profile Updated Successfully');

      // update local storage also

      localStorage.setItem('user', JSON.stringify(this.user));

    },

    error: () => {

      alert('Update failed');

    }

  });

}
 

}
 