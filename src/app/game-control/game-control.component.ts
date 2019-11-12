import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
@Output() ClickOnStart = new EventEmitter<number>();
@Output() ClickOnStop = new EventEmitter<number>();
message= "child to parent";
  constructor() { }

  ngOnInit() {
  }

  doClickOnStart(){
this.sendToParent.emit(this.message);
    

  }
  doClickOnStop(){

  }

}