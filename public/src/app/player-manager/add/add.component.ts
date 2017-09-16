import { PlayersService } from './../../players.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  player = {
    name: '',
    pref_position: '',
    game1Status: 'undecided',
    game2Status: 'undecided',
    game3Status: 'undecided'
  };
  constructor(private _playersService: PlayersService, private router: Router) { }

  onSubmit() {
    console.log('saving Player');
    this._playersService.createPlayer(this.player);
    this.player = {
      name: '',
      pref_position: '',
      game1Status: 'undecided',
      game2Status: 'undecided',
      game3Status: 'undecided'
    };
    this.router.navigate(['players', 'list']);
  }

  ngOnInit() {
  }

}
