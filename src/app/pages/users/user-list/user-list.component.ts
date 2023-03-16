import { Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlayersService} from 'src/app/services/players.service';
import { FormControl, ReactiveFormsModule} from '@angular/forms';
import { debounceTime, Observable } from 'rxjs';
import { Player } from 'src/app/commons/interface/player.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  _playerService = inject(PlayersService);
  players$! : Observable<Player[]>;
  searcher = new FormControl
  _router = inject(Router);
  ngOnInit(){
    // this._playerService.getPlayer().subscribe((res) => console.log(res)); 
    this.players$ = this._playerService.getPlayer();
    this.searcher.valueChanges
    .pipe(
      debounceTime(1000)
    )
    .subscribe( search=> {
      if (search) {
        this.players$ = this._playerService.getPlayer(search);
      }else{
        this.players$ = this._playerService.getPlayer();
      }
    })
  }

  editPlayer(player: Player){
    this._router.navigateByUrl('users/edit', {state: {player}});
  }

  deletePlayer(player: Player){
    if (confirm(`Seguro de que Quieres Borrar a ${player.name}`)) {
      
    }
  }
}
