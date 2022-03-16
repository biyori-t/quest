import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest-paper',
  templateUrl: './quest-paper.component.html',
  styleUrls: ['./quest-paper.component.scss'],
})
export class QuestPaperComponent implements OnInit {
  @Input() title: string = 'No Title';
  @Input() emoji: string = "🧡";
  @Input() reward: number = 0;
  @Input() tasks: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
