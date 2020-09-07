import { Component, OnInit } from '@angular/core';
import { Card, Suit, Rank } from '../card';

@Component({
  selector: 'app-player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.css']
})
export class PlayerHandComponent implements OnInit {
  hand: Card[];

  constructor() { }

  ngOnInit(): void {
     this.hand = [new Card(Suit.Heart, Rank.Queen), new Card(Suit.Heart, Rank.King), new Card(Suit.Heart, Rank.Ace), new Card(Suit.Heart, Rank.Ace), new Card(Suit.Club, Rank.Six), new Card(Suit.Spade, Rank.Six), new Card(Suit.Diamond, Rank.Six), new Card(Suit.Diamond, Rank.Eight), new Card(Suit.Diamond, Rank.Nine), new Card(Suit.Diamond, Rank.Nine), new Card(Suit.Diamond, Rank.Nine), new Card(Suit.Diamond, Rank.Jack)];
  }

}
