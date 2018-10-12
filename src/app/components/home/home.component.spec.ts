import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameSearchService } from '@app/services/gameSearch.service';

import { HomeComponent } from './home.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let comp: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [ButtonModule, TableModule, HttpModule, RouterTestingModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('should call getData', () => {
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
