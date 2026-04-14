import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

import { environment } from '../../../environment/environment';

@Injectable({

  providedIn: 'root'

})

export class AuthService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  // 🔹 LOGIN

  login(data: any) {

    return this.http.post<any>(`${this.baseUrl}/auth/login`, data);

  }

  // 🔹 REGISTER

  register(data: any) {

    return this.http.post<any>(`${this.baseUrl}/auth/register`, data);

  }

  // 🔹 TOKEN

  setToken(token: string) {

    localStorage.setItem('token', token);

  }

  getToken() {

    return localStorage.getItem('token');

  }

  // 🔹 ROLE

  setRole(role: string) {

    localStorage.setItem('role', role);

  }

  getRole() {

    return localStorage.getItem('role');

  }

  // 🔹 LOGIN CHECK

  isLoggedIn(): boolean {

    return !!this.getToken();

  }

  // 🔹 LOGOUT

  logout() {

    localStorage.clear();

    this.router.navigate(['/login']);

  }

}
 