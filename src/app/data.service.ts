import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getGameState(): Game {
    let gameState = new Game();
    gameState.playerTurn = 3;

    return gameState;
  }
}
