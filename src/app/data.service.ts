import { Injectable } from '@angular/core';
import { Game } from './game';
import { Player } from './player';
import { Meld } from './meld';
import { Card, Suit, Rank } from './card';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getGameState(): Game {
    let gameState = new Game();
    let player1 = new Player("Michael");
    player1.hand = [new Card(Suit.Diamond, Rank.Queen), new Card(Suit.Heart, Rank.Queen), new Card(Suit.Diamond, Rank.Ace), new Card(Suit.Club, Rank.Eight)];
    player1.melds = [];
    player1.melds.push(new Meld([new Card(Suit.Diamond, Rank.Queen), new Card(Suit.Diamond, Rank.King), new Card(Suit.Diamond, Rank.Ace)]));
    player1.melds.push(new Meld([new Card(Suit.Club, Rank.Two), new Card(Suit.Club, Rank.Seven), new Card(Suit.Diamond, Rank.Seven)]));
    player1.melds.push(new Meld([new Card(Suit.Spade, Rank.Ten)]));
    gameState.players.push(player1);

    let player2 = new Player("Lisa");
    player2.melds = [];
    player2.melds.push(new Meld([new Card(Suit.Diamond, Rank.Queen)]));
    player2.melds.push(new Meld([new Card(Suit.Diamond, Rank.Two)]));
    player2.melds.push(new Meld([new Card(Suit.Diamond, Rank.Ten)]));
    gameState.players.push(player2);

    gameState.players.push(new Player("Terry"));
    gameState.players.push(new Player("Julien"));
    gameState.playerTurn = 3;

    return gameState;
  }
}
