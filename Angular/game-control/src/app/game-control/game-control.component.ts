import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() invertalFired = new EventEmitter<number>();
  myInterval;
  n = 1;

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.myInterval = setInterval(() => {
      this.invertalFired.emit(this.n++);
    }, 1000);
  }

  stop() {
    clearInterval(this.myInterval);
  }

}
