import { Card } from './card';

export class Meld {
  meld: Card[] = [];

  constructor(cards: Card[]) {
    this.meld = cards;
  }

  getCards() {
    return this.meld;
  }
}
