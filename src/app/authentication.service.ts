import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loginUrl = 'https://papi-stage.contentmedia.eu/2.0/auth/authenticate';
  authUrl = '/users/authenticate';
  constructor(private http: Http) { }

  validateLogin(email: string, password: string) {
    return this.http.post(this.loginUrl, { email: email, password: password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user['_body']) {
          const body = JSON.parse(user['_body']);
          const token = body.partnersession;
          // store user details and token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', token);
        }
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
  }
}
