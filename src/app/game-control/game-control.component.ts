import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('startClicked') startClicked = new EventEmitter();
  count: number = 0;
  intervalId;
  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.count = this.count + 1;
  }

  startCounting() {
    this.intervalId = setInterval(() => {
      this.increment();
      this.startClicked.emit(this.count);
    }, 1000);
  }

  stopCounting() {
    if(this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
