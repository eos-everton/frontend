import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  register(
    name: string,
    email: string,
    password: string,
    password_confirmation: string
  ): Observable<any> {
    const userRegister = { name, email, password, password_confirmation };
    return this.http.post(`${this.apiUrl}/register`, userRegister);
  }

  login(email: string, password: string): Observable<any> {
    const user = { email, password };
    return this.http.post(`${this.apiUrl}/login`, user);
  }
}
