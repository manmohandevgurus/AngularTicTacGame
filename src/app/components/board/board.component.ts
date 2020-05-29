import { Component } from '@angular/core';
import { WinnercheckService } from '../../winnercheck.service'
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  constructor(private winnercheckService: WinnercheckService){}

  board = this.winnercheckService.board;
  xTurn = this.winnercheckService.xTurn;
  winner = Array(9).fill(false);
  haveWinner = false;
  cpuPlayer=true;
  data:any=[];
  

addSymbol(id: number) {
  if (this.board[id]) return;
  this.board[id] = (this.xTurn ? "X" : "O") ;
  this.xTurn = !this.xTurn;
  this.winCheck()
  this.data.fil
}

markSelection(index:number){
  let marked=0;
  this.board.map(item => {if(item!=null)marked++;})
  console.log(marked);
  if(this.haveWinner == false){ this.addSymbol(index);
    (this.winner.find(item => item == true) ? this.haveWinner = true 
      : this.haveWinner = false);
    let indexes = this.winnercheckService.checkWinner(this.board)
    indexes.map(item => this.winner[item] = true)
    
   
  if(this.cpuPlayer){
      setTimeout(() => {
        if(this.xTurn && marked<9){
          index=Math. floor(Math. random() * (8 - 0 + 1)) + 0;
          let x=this.winnercheckService.CheckComputerForWin(this.board);
          if(x>=0)
            index=x;
          console.log("for cpux"+x);
          console.log("for cpu"+index);
        this.markSelection(index);
        }
      }, 500);
     
    }
  }
  
}

selectedStatus(event: Event){
  let selectedOptions = event.target['options'];
  let selectedIndex = selectedOptions.selectedIndex;
  let selectElementText = selectedOptions[selectedIndex].text;
  if(selectedIndex==0)
    this.cpuPlayer=true;
  else
    this.cpuPlayer=false;

}

winCheck(){
  if (this.board.filter(item => typeof item == "string").length == 9){
    (this.winner.find(item => item == true) ? this.haveWinner = true 
    : this.haveWinner = false);
  let indexes = this.winnercheckService.checkWinner(this.board)
  indexes.map(item => this.winner[item] = true)
  }
}

handleReset(){
  this.board = Array(9).fill(null);
  this.winner = Array(9).fill(false);
  this.haveWinner=false;
  this.xTurn=false;
}
}
