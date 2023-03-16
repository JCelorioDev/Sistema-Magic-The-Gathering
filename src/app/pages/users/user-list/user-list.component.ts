import { Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlayersService} from 'src/app/services/players.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  _playerService = inject(PlayersService);

  ngOnInit(){
    this._playerService.getPlayer().subscribe((res) => console.log(res)); 
  }
}
