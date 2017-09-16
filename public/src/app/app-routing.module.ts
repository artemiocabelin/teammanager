import { AddComponent } from './player-manager/add/add.component';
import { ListComponent } from './player-manager/list/list.component';
import { GameThreeComponent } from './status-manager/game-three/game-three.component';
import { GameTwoComponent } from './status-manager/game-two/game-two.component';
import { GameOneComponent } from './status-manager/game-one/game-one.component';
import { StatusManagerComponent } from './status-manager/status-manager.component';
import { PlayerManagerComponent } from './player-manager/player-manager.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/players/list'},
  {path: 'players', component: PlayerManagerComponent, children: [
    {path: 'list', component: ListComponent},
    {path: 'addplayer', component: AddComponent},
  ]},
  {path: 'status/game', component: StatusManagerComponent, children: [
    {path: '1', component: GameOneComponent},
    {path: '2', component: GameTwoComponent},
    {path: '3', component: GameThreeComponent},
  ]} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
