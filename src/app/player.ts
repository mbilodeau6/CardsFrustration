import { Card, Suit, Rank } from './card';
import { Meld } from './meld';

export class Player {
  name: String;
  hand: Card[];
  melds: Meld[];
  score: number;
  level: number;

  constructor(name:String) {
    this.name = name;
    this.level = 1;
    this.score = 0;
    this.melds = [];
  }

  // TODO: Remove when server code complete
  setHand(hand: Card[]) {
    this.hand = hand;
  }

  setPlayedCards(playedCards: Card[][]) {
    playedCards.forEach((each: Card[]) => {
      this.melds.push(new Meld(each));
   });
  }
}
