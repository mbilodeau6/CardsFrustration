import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-shared-area',
  templateUrl: './shared-area.component.html',
  styleUrls: ['./shared-area.component.css']
})
export class SharedAreaComponent implements OnInit {
  @Input() gameState: Game;

  constructor() { }

  ngOnInit(): void {
  }
}
