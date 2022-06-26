import { Component, Input, OnInit } from '@angular/core';
import { initQuestPaper } from './quest-paper';

@Component({
  selector: 'app-quest-paper',
  templateUrl: './quest-paper.component.html',
  styleUrls: ['./quest-paper.component.scss'],
})
export class QuestPaperComponent implements OnInit {
  @Input() questPaper = initQuestPaper();

  constructor() {}

  ngOnInit(): void {}
}
