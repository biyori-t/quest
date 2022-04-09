import { Component, Input, OnInit } from '@angular/core';
import { QuestTodo } from '../todo';

@Component({
  selector: 'app-quest-todo-list',
  templateUrl: './quest-todo-list.component.html',
  styleUrls: ['./quest-todo-list.component.scss'],
})
export class QuestTodoListComponent implements OnInit {
  @Input() todos: QuestTodo[] = [];

  constructor() {}

  ngOnInit(): void {}
}
