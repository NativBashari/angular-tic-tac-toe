import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public board= [{id:0 ,value: ''},{id:1 ,value: ''},{id:2 ,value: ''},{id:3 ,value: ''},{id:4 ,value: ''},{id:5 ,value: ''},{id:6 ,value: ''},{id:7 ,value: ''},{id:8 ,value: ''}];
  activePlayer : string = "X";
  turnCount: number = 0;
  currentWinner :string = "";
  isGameRunning: boolean = true;


  constructor() { 
  }
  newGame(){
    this.generateGameBoard();
    this.activePlayer = "X";
    this.turnCount = 0;
    this.currentWinner = "";
    this.isGameRunning = true;
  }
  generateGameBoard(){
    for(let i = 0; i < 9; i++){
      this.board[i] = {id: i , value : ""};
    }

  }

  // get getBoard(){
  //   return this.board;
  // }
  // set setBoard( board:[] ){
  //   this.board = [...board]
  // }
  changePlayerTurn(squereClicked: any){
    this.board[squereClicked.id].value = this.activePlayer;
    if(this.checkWinner()){
      this.isGameRunning = false;
      this.currentWinner = this.activePlayer;
    }
    this.activePlayer = this.activePlayer === "X"? "O" : "X";
  }


  checkWinner(): boolean{
    const OPTIONS = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i = 0; i < OPTIONS.length ;i++){
      const [a,b,c] = OPTIONS[i];
      if(this.board[a].value == this.board[b].value && this.board[a].value == this.board[c].value && this.board[a].value != ""){
        return true;
      }
    }
    return false;
  }

 

  
}

