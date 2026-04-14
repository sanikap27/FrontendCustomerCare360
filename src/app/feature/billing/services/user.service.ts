import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { Observable } from 'rxjs';

export interface User {

  userId: number;

  name: string;

  email: string;

  role: string;

}

@Injectable({

  providedIn: 'root'

})

export class UserService {
private apiUrl = `${environment.apiUrl}/User`;;

  constructor(private http: HttpClient) {}

  getMe(): Observable<User> {

    return this.http.get<User>(`${this.apiUrl}/me`);

  }

  updateMe(data: User) {

    return this.http.put(`${this.apiUrl}/me`, data);

  }

}
 