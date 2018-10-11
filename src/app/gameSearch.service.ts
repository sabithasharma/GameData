import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GameSearchService {
    gameUrl = 'https://papi-stage.contentmedia.eu/2.0/roundhistory/rounds?accountId=60137&dateFrom=2018-08-16T00:30:10Z&operatorId=7';
    constructor(public http: HttpClient) { }
    public searchGameData() {
       /* const httpOptions = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return this.http.get(this.gameUrl, httpOptions);*/ // working
        return this.http.get(this.gameUrl);
    }
}
