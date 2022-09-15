import { Component, OnInit } from '@angular/core';
import { GameService } from '../game-service.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  
  constructor(public boardService: GameService) { 

  }

  ngOnInit(): void {
  }

 

}
