import { Component, OnInit } from '@angular/core';
import { Card, Suit, Rank } from '../card';
import { Player } from '../player';

@Component({
  selector: 'app-player-area',
  templateUrl: './player-area.component.html',
  styleUrls: ['./player-area.component.css']
})
export class PlayerAreaComponent implements OnInit {

  players: Player[] = [new Player("Michael")];
  cards: Card[][] = [[new Card(Suit.Diamond, Rank.Ace), new Card(Suit.Spade, Rank.King), new Card(Suit.Heart, Rank.Ten)], [new Card(Suit.Club, Rank.Joker)]];

  constructor() { }

  ngOnInit(): void {
    this.players[0].level = 2;
    this.players[0].hand = [];
    this.players[0].setPlayedCards(this.cards);
  }

}
