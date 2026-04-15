
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../../../../environment/environment';
import { RegisterDTO } from '../models/register-dto';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register-component.html',
  styleUrls: ['./register-component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  // ✅ Reactive form setup
  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    password: ['', Validators.required],
    role: ['', Validators.required]
  });

  onRegister() {
    if (this.form.invalid) {
      alert("All fields are required and must be valid");
      return;
    }

    // ✅ Cast form value to your DTO
    const registerData: RegisterDTO = this.form.getRawValue();

    this.authService.register(registerData).subscribe({
        next: (res) => {
          alert(res.message || "Registration Successful");
          this.router.navigate(['/login']);
        },
        error: (err) => {
          alert(err.error?.message || "Registration failed");
        }
      });
  }
}
