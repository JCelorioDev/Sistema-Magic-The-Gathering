import { Injectable } from '@angular/core';
import {Firestore,addDoc} from '@angular/fire/firestore';
import { Player } from '../commons/interface/player.interface';
import { collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private firestore:Firestore) { }

  addPlayer(player:Player){
    const palyerRef = collection(this.firestore, 'players');
    return addDoc(palyerRef, player);
  }
}
