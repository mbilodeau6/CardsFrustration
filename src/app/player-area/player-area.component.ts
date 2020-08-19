import { Component, OnInit, Input } from '@angular/core';
import { Card, Suit, Rank } from '../card';
import { Player } from '../player';

@Component({
  selector: 'app-player-area',
  templateUrl: './player-area.component.html',
  styleUrls: ['./player-area.component.css']
})
export class PlayerAreaComponent implements OnInit {
  @Input() playerId: number;

  players: Player[] = [new Player("Michael"), new Player("Lisa"), new Player("Julien"), new Player("Terry")];

  constructor() { }

  ngOnInit(): void {
    this.players[0].level = 2;
    this.players[0].setPlayedCards([[new Card(Suit.Diamond, Rank.Queen), new Card(Suit.Diamond, Rank.King), new Card(Suit.Diamond, Rank.Ace)], [new Card(Suit.Club, Rank.Two), new Card(Suit.Club, Rank.Seven), new Card(Suit.Diamong, Rank.Seven)], [new Card(Suit.Spade, Rank.Ten)]]);
    this.players[0].setHand([]);

    this.players[1].level = 1;
    this.players[1].setPlayedCards([[new Card(Suit.Spade, Rank.Two)], [new Card(Suit.Spade, Rank.Three)], [new Card(Suit.Heart, Rank.Four)]]);
    this.players[1].setHand([]);

    this.players[2].level = 2;
    this.players[2].setPlayedCards([[new Card(Suit.Diamond, Rank.Eight), new Card(Suit.Diamond, Rank.Eight), new Card(Suit.Club, Rank.Eight)]]);
    this.players[2].setHand([]);

    this.players[3].level = 2;
    this.players[3].setPlayedCards([[new Card(Suit.Club, Rank.Nine), new Card(Suit.Diamond, Rank.Nine), new Card(Suit.Club, Rank.Nine), new Card(Suit.Club, Rank.Two)]]);
    this.players[3].setHand([]);
  }

}
