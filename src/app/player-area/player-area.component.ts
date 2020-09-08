import { Component, OnInit, Input } from '@angular/core';
import { Card, Suit, Rank } from '../card';
import { Player } from '../player';

@Component({
  selector: 'app-player-area',
  templateUrl: './player-area.component.html',
  styleUrls: ['./player-area.component.css']
})
export class PlayerAreaComponent implements OnInit {
  @Input() player: Player;

  constructor() { }

  ngOnInit(): void {
  }

}
