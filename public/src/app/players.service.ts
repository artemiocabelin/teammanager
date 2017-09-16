import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
@Injectable()
export class PlayersService {

  constructor(private _http: Http) { }

  retrieveAllPlayers() {
    return this._http.get('/api/players')
      .map(response => response.json())
      .toPromise();
  }

  createPlayer(newPlayerData) {
    console.log('hello');
    console.log(newPlayerData);
    return this._http.post('/api/players/create', newPlayerData)
      .map(response => response.json()).toPromise();
  }

  removePlayerById(playerId) {
    console.log('This is the player Id:');
    console.log(playerId);
    return this._http.post('/api/players/remove', playerId)
      .map(response => response.json()).toPromise();
  }

  setGame1StatusByPlayer(order) {
    console.log('service update game 1');
    console.log(order);
    return this._http.post('/api/players/game/1/update', order)
      .map(response => response.json()).toPromise();
  }

  setGame2StatusByPlayer(order) {
    console.log('service update game 2');
    console.log(order);
    return this._http.post('/api/players/game/2/update', order)
      .map(response => response.json()).toPromise();
  }
  setGame3StatusByPlayer(order) {
    console.log('service update game 3');
    console.log(order);
    return this._http.post('/api/players/game/3/update', order)
      .map(response => response.json()).toPromise();
  }

}
