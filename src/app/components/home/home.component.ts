/**
 * @Author: Sabitha Sharma L
 * @description - displays data for historical search data
 */
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { GameSearchService } from '../../gameSearch.service';
import { Router } from '@angular/router';
import { Round } from '../../model/rounds';

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

  ngOnInit() {
     this.getData();
  }
/**
 * @method onLogout
 * @description - called when logout button clicked. Removes the local token and routes to login page
 */
  onLogout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  /**
 * @method getData
 * @description - fetches the data from gameSearchService
 */
  getData() {
    this.gameSearchService.searchGameData().pipe().subscribe(rounds => {
      this.rounds = rounds['rounds'];
    });
  }

}
