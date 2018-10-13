/**
 * @Author - Sabitha Sharma L
 * @description - fetches the data from the url based on from date
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
import { Round } from '@app/model/rounds';

@Injectable({
    providedIn: 'root'
})
export class GameSearchService {
    constructor(public _http: HttpClient, private commonService: CommonService) { }
    /**
     * @method searchGameData
     * @description fetches the data based on authorization from the Url
     */
    public searchGameData(): any {
        const gameUrl = this.commonService.getGameUrl() + this.commonService.getRoundHistoryUrl();
        return this._http.get<Round[]>(gameUrl);
    }
}
