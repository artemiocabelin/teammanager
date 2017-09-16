import { PlayersService } from './players.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerManagerComponent } from './player-manager/player-manager.component';
import { StatusManagerComponent } from './status-manager/status-manager.component';
import { GameOneComponent } from './status-manager/game-one/game-one.component';
import { GameTwoComponent } from './status-manager/game-two/game-two.component';
import { GameThreeComponent } from './status-manager/game-three/game-three.component';
import { ListComponent } from './player-manager/list/list.component';
import { AddComponent } from './player-manager/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerManagerComponent,
    StatusManagerComponent,
    GameOneComponent,
    GameTwoComponent,
    GameThreeComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
