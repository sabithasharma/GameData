/**
 * @Author - Sabitha Sharma L
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
import { Round } from '../model/rounds';

@Injectable({
    providedIn: 'root'
})
export class GameSearchService {
    constructor(public _http: HttpClient, private commonService: CommonService) { }
    /**
     * @method searchGameData
     * @description fetches the data based on authorization from the Url
     */
    public searchGameData() {
        const gameUrl = this.commonService.getGameUrl() + this.commonService.getRoundHistoryUrl();
        return this._http.get<Round[]>(gameUrl);
    }
}
