import { TestBed } from '@angular/core/testing';
import { BasicAuthInterceptor } from './basic-auth.interceptor';
import { GameSearchService } from '@app/services/gameSearch.service';
import {
    HttpClientTestingModule,
    HttpTestingController,
  } from '@angular/common/http/testing';

describe('BasicAuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
        GameSearchService, BasicAuthInterceptor
      ],
  })
);

  it('should be created', () => {
    const service: BasicAuthInterceptor = TestBed.get(BasicAuthInterceptor);
    expect(service).toBeTruthy();
  });

  it('should add an Authorization header', () => {
    const service: GameSearchService = TestBed.get(GameSearchService);
    service.searchGameData().subscribe(response => {
      expect(response).toBeTruthy();
    });
    let httpMock: HttpTestingController;
    httpMock = TestBed.get(HttpTestingController);
    // tslint:disable-next-line:max-line-length
    const httpRequest = httpMock.expectOne('https://papi-stage.contentmedia.eu/2.0/roundhistory/rounds?accountId=60137&dateFrom=2018-08-16T00:30:10Z&operatorId=7');
    expect(httpRequest.request.headers.has('Authorization'));
    expect(httpRequest.request.headers.get('Authorization')).toBe(
        localStorage.getItem('token'),
      );
  });
});
