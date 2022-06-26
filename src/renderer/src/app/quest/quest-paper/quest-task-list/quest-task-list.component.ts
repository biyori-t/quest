import { Component, Input, OnInit } from '@angular/core';
import { QuestTask } from '../../models/quest-task';

@Component({
  selector: 'app-quest-task-list',
  templateUrl: './quest-task-list.component.html',
  styleUrls: ['./quest-task-list.component.scss'],
})
export class QuestTaskListComponent implements OnInit {
  @Input() tasks: QuestTask[] = [];

  constructor() {}

  ngOnInit(): void {}
}
