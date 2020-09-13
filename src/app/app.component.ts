import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Game } from './game';
import { Player } from './player';
import { Card, Suit, Rank } from './card';

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

  // TODO: The version of Card from HTTP.get is not a real card. Why not?
  // Do the conversion manually until I figure it out.
  setGameState(gameState: Game) {
    let newGameState: Game = new Game();
    newGameState.players = [];
    for(let player of gameState.players) {
      let newPlayer = new Player(player.name);

      for(let card of player.hand) {
        newPlayer.hand.push(new Card(card.suit, card.rank));
      }

      newGameState.players.push(newPlayer);
    }

    this.gameState = newGameState;
  }

  getGameState(): void {
    this.dataService.getGameState().subscribe(gameState => this.setGameState(gameState));
  }

  ngOnInit() {
    this.getGameState();
  }
}
