import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Game } from './game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameState: Game;
  title = 'cards-frustration';

  constructor(private dataService: DataService) {
    this.gameState = new Game();
  }

  getGameState(): void {
    this.dataService.getGameState().subscribe(gameState => this.gameState = gameState);
  }

  ngOnInit() {
    this.getGameState();
  }
}
