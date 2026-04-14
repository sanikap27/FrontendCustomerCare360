import { Component, inject } from '@angular/core';

import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';

@Component({

  selector: 'app-login',

  standalone: true,

  imports: [ReactiveFormsModule, RouterLink],

  templateUrl: './login-component.html',

  styleUrls: ['./login-component.css']

})

export class LoginComponent {

  private fb = inject(FormBuilder);

  private auth = inject(AuthService);

  private router = inject(Router);

  // ✅ CREATE FORM

  form = this.fb.group({

    email: [''],

    password: ['']

  });

  onLogin() {

    this.auth.login(this.form.value).subscribe({

      next: (res) => {
        console.log(res);

        this.auth.setToken(res.token);

        this.auth.setRole(res.role);
       localStorage.setItem('user', JSON.stringify(res.user));
 
        // ✅ ROLE BASED NAVIGATION

        switch (res.role) {

          case 'Admin':

            this.router.navigate(['/admin']);

            break;

          case 'Agent':

            this.router.navigate(['/agent']);

            break;

          case 'Billing':

            this.router.navigate(['/billing']);

            break;

          case 'Customer':

            this.router.navigate(['/customer-dashboard']);

            break;

          default:

            alert('Invalid role');

        }

      },

      error: (err) => {

        alert(err?.error?.message || 'Login failed');

      }

    });

  }

}
 