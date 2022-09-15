import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService } from 'src/app/game-service.service';

@Component({
  selector: 'app-squere',
  templateUrl: './squere.component.html',
  styleUrls: ['./squere.component.css']
})
export class SquereComponent implements OnInit {
@Input() squere: any;


  constructor(public gameService: GameService) {

   }

  ngOnInit(): void {
  }
changePlayer(){

  if(this.gameService.isGameRunning && this.squere.value === ''){
    this.squere.value = this.gameService.activePlayer;
    this.gameService.changePlayerTurn(this.squere);
  }
  
}

}
