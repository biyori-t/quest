import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest-board',
  templateUrl: './quest-board.component.html',
  styleUrls: ['./quest-board.component.scss'],
})
export class QuestBoardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() counter = 0;

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }
}
