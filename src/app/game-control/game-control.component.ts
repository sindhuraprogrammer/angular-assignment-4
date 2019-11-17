import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() ClickOnStart = new EventEmitter<number>();
  interval;
  i=1;
  constructor() { }
  ngOnInit() {}
  startClicked(){
    this.interval = setInterval(() => {
    this.ClickOnStart.emit(this.i++);
      }, 1000);
  }

  stopClicked(){
    if (this.interval) {
     clearInterval(this.interval);
  }

 }
}