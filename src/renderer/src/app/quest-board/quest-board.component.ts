import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest-board',
  templateUrl: './quest-board.component.html',
  styleUrls: ['./quest-board.component.scss'],
})
export class QuestBoardComponent implements OnInit {
  @Input() quests: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
