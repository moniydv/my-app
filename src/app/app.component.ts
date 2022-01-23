import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Game Control';
  timerList: number[] = [];

  afterStartClicked(count: number) {
    this.timerList.push(count);
  }
}
