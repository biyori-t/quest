import { Component, Input, OnInit } from '@angular/core';
import { QuestPaper } from '../quest-paper/quest-paper';

@Component({
  selector: 'app-quest-board',
  templateUrl: './quest-board.component.html',
  styleUrls: ['./quest-board.component.scss'],
})
export class QuestBoardComponent implements OnInit {
  @Input() questPapers: QuestPaper[] = [];

  constructor() {}

  ngOnInit(): void {}
}
