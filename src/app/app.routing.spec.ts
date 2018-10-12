
import {Location} from '@angular/common';
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';

import { HomeComponent } from '@app/components/home/home.component';
import { LoginComponent } from '@app/components/login/login.component';
import { routing } from '@app/app.routing';
   
describe('Router: App', () => {

  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        LoginComponent,
      ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();

    it('navigate to "search" takes you to /login', fakeAsync(() => {
      router.navigate(['login']);
      tick();
      expect(location.path()).toBe('/login');
    }));
  });
});

