import { Component } from '@angular/core';
import { GameService } from './game-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';
  constructor(public gameService: GameService) {
   
  }
}
