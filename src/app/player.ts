import { Card, Suit, Rank } from './card';

export class Player {
  name: String;
  hand: Card[];
  playedCards: Card[][];
  points: number;
  level: number;

  constructor(name:String) {
    this.name = name;
    this.level = 1;
    this.points = 0;
  }

  // TODO: Remove when server code complete
  setHand(hand: Card[]) {
    this.hand = hand;
  }

  setPlayedCards(playedCards: Card[][]) {
    this.playedCards = playedCards;
  }
}
