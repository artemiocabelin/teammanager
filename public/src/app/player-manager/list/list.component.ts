import { PlayersService } from './../../players.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
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

  deletePlayer(playerId) {
    const pId = {id:playerId};
    this._playersService.removePlayerById(pId)
      .then( () => {
        console.log('sadfasfasdf');
        this.getAllPlayers();
        console.log(this.playerList);
      });
  }

  ngOnInit() {
  }

}
