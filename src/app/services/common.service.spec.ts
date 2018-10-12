import { TestBed } from '@angular/core/testing';
import { CommonService } from './common.service';

describe('CommonService', () => {

const gameUrl = 'https://papi-stage.contentmedia.eu/2.0/';
const authUrl = 'auth/authenticate';
const roundHistoryUrl = 'roundhistory/rounds?accountId=60137&dateFrom=2018-08-16T00:30:10Z&operatorId=7';
  beforeEach(() => TestBed.configureTestingModule({
  }));

  it('should be created', () => {
    const service: CommonService = TestBed.get(CommonService);
    expect(service).toBeTruthy();
  });

  it('should return all the urls i.e game url, auth url, rounghistoryurl', () => {
    const service: CommonService = TestBed.get(CommonService);
    expect(service.getGameUrl()).toEqual(gameUrl);
    expect(service.getAuthUrl()).toEqual(authUrl);
    expect(service.getRoundHistoryUrl()).toEqual(roundHistoryUrl);
  });
});
