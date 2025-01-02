import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, catchError } from 'rxjs';
import { environment } from '../environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiRoot}/authentication/login`;
  private isAuthenticated = false;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    console.log('Login method called');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
    const body = { username, password };

    console.log('Sending POST request to:', this.apiUrl);
    console.log('Request body:', body);

    return this.http.post<any>(this.apiUrl, body, { headers }).pipe(
      tap(response => {
        console.log('Response received:', response);
        if (response && response.token) {
          localStorage.setItem('jwt', response.token);
          this.setAuthenticated(true);
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        return of(null);
      })
    );
  }

  setAuthenticated(status: boolean) {
    this.isAuthenticated = status;
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('jwt');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
