import { TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { GameSearchService } from './gameSearch.service';

describe('GameSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpModule, HttpClientModule]
  }));

  it('should be created', () => {
    const service: GameSearchService = TestBed.get(GameSearchService);
    expect(service).toBeTruthy();
  });

  it('should call httpGet', () => {
    const fakeHttpClient = {
      get: () => { }
    };
    const fakeGameService = {
      getGameUrl: () => { },
      getRoundHistoryUrl: () => { }
    };
    spyOn(fakeHttpClient, 'get').and.returnValue({});
    const searchService = new GameSearchService(<any>fakeHttpClient, <any>fakeGameService);
    searchService.searchGameData();
    expect(fakeHttpClient.get).toHaveBeenCalled();
  });
});
