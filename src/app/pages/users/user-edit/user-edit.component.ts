import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
}from '@angular/forms';
import { PlayersService } from 'src/app/services/players.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent {

  _playerService = inject(PlayersService);
  _router = inject(Router);
  
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    decks: new FormArray([]),
  })
}
