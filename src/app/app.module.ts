import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerHandComponent } from './player-hand/player-hand.component';
import { SharedAreaComponent } from './shared-area/shared-area.component';
import { PlayerAreaComponent } from './player-area/player-area.component';
import { GameSurfaceComponent } from './game-surface/game-surface.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerHandComponent,
    SharedAreaComponent,
    PlayerAreaComponent,
    GameSurfaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
