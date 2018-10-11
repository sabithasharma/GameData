/**
 * @Author - Sabitha Sharma L
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  gameUrl = 'https://papi-stage.contentmedia.eu/2.0/';
  authUrl = 'auth/authenticate';
  roundHistoryUrl = 'roundhistory/rounds?accountId=60137&dateFrom=2018-08-16T00:30:10Z&operatorId=7';
  constructor() { }
  // Main Url
  public getGameUrl() {
    return this.gameUrl;
  }
    // Authentication Url
  public getAuthUrl() {
    return this.authUrl;
  }
  // RundHistory Url based on from date
  public getRoundHistoryUrl() {
    return this.roundHistoryUrl;
  }
}
