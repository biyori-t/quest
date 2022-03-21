import { Component, Input, OnInit } from '@angular/core';
import {QuestPaper} from "./quest-paper";


@Component({
  selector: 'app-quest-paper',
  templateUrl: './quest-paper.component.html',
  styleUrls: ['./quest-paper.component.scss'],
})
export class QuestPaperComponent implements OnInit {
  @Input() questPaper?: QuestPaper;

  constructor() {}

  ngOnInit(): void {}
}
