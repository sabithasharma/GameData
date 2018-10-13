/**
 * @Author: Sabitha Sharma L
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private _http: Http, private commonService: CommonService) { }
  /**
   * @method validateLogin
   * @description - validates the login based on email and password. Also stores the token in localstorage
   */
  public validateLogin(email: string, password: string): any {
    const loginUrl = this.commonService.getGameUrl() + this.commonService.getAuthUrl();
    return this._http.post(loginUrl, { email: email, password: password })
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
  /**
   * @method logout
   * @description - removes the token from local storage
   */
  public logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
  }
}
