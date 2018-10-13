/**
 * @Author: Sabitha Sharma L
 * @description - displays data for historical search data
 */
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/services/authentication.service';
import { GameSearchService } from '@app/services/gameSearch.service';
import { Router } from '@angular/router';
import { Round } from '@app/model/rounds';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private rounds: Round[];
  constructor(private authenticationService: AuthenticationService,
    private gameSearchService: GameSearchService,
    private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }
  /**
   * @method onLogout
   * @description - called when logout button clicked. Removes the local token and routes to login page
   */
  onLogout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  /**
 * @method getData
 * @description - fetches the data from gameSearchService
 */
  getData(): void {
    this.gameSearchService.searchGameData().pipe().subscribe(rounds => {
      this.rounds = rounds['rounds'];
    });
  }

/**
 * @method getFormattedDate
 * @param UTCDate
 * @description returns the date in readable format
 */
  getFormattedDate(UTCDate): any {
      return new Date(UTCDate).toDateString();
  }

}
