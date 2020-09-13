import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from './game';
import { Player } from './player';
import { Meld } from './meld';
import { Card, Suit, Rank } from './card';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getGameState(): Observable<Game> {
    let gameStateUrl = 'http://localhost:8080/FrustrationService/frustration/cards';
    let gameState = this.http.get<Game>(gameStateUrl);
    return gameState;
  }
}
