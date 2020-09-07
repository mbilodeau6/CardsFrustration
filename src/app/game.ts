import Player from '.player.ts';
import { Card, Suit, Rank } from './card';

export class Game {
    deck: Card[];
    discardPile: Card[];
    playerTurn: number;
    players: Player[];
}
