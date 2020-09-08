import { Component, OnInit, Input } from '@angular/core';
import { Card, Suit, Rank } from '../card';

@Component({
  selector: 'app-player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.css']
})
export class PlayerHandComponent implements OnInit {
  @Input() hand: Card[];

  constructor() { }

  ngOnInit(): void {
  }
}
