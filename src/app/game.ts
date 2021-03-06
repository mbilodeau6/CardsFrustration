import { Player } from './player';
import { Card, Suit, Rank } from './card';

export class Game {
    deckCardCount: number;
    discardTopCard: Card;
    playerTurn: number;
    players: Player[];
    playerId: number;
    gameId: string;

    constructor() {
      this.players = [];

      // TODO: Is there a better way to keep game working while we wait for state
      // from server?
      this.players.push(new Player('P1'));
      this.players.push(new Player('P2'));
      this.players.push(new Player('P3'));
      this.players.push(new Player('P4'));
    }
}
