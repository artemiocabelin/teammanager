import { PlayersService } from './../../players.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-three',
  templateUrl: './game-three.component.html',
  styleUrls: ['./game-three.component.css']
})
export class GameThreeComponent implements OnInit {
  playerList = [];
  constructor(private _playersService: PlayersService) {
    this.getAllPlayers();
   }

  getAllPlayers() {
    this._playersService.retrieveAllPlayers()
      .then((response) => {
        console.log('success then');
        this.playerList = response;
        console.log(this.playerList);
      })
      .catch((errors) => {
        console.log('errors catch');
        console.log(errors);
      });
  }

  updateGame3Status(status, player) {
    console.log('initiating update');
    console.log(status);
    console.log(player);
    const changeStatusOrder = {status : status, playerId : player};
    this._playersService.setGame3StatusByPlayer(changeStatusOrder)
      .then(() => {
        console.log('getting another list');
        this.getAllPlayers();
      });
  }
  ngOnInit() {
  }

}
