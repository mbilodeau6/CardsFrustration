import { Injectable } from '@angular/core';
import { Game } from './game';
import { Player } from './player';
import { Card, Suit, Rank } from './card';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getGameState(): Game {
    let gameState = new Game();
    let player1 = new Player("MB");
    player1.hand = [new Card(Suit.Diamond, Rank.Queen), new Card(Suit.Heart, Rank.Queen), new Card(Suit.Diamond, Rank.Ace)];
    gameState.players.push(player1);
    gameState.players.push(new Player("LM"));
    gameState.players.push(new Player("TB"));
    gameState.players.push(new Player("JB"));
    gameState.playerTurn = 3;

    return gameState;
  }
}
